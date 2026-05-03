const APP_ENV_KEYS = [
  "NODE_ENV",
  "APP_URL",
  "DATABASE_URL",
  "POSTGRES_DB",
  "POSTGRES_USER",
  "POSTGRES_PASSWORD",
  "POSTGRES_PORT",
  "AUTH_SECRET",
  "AUTH_URL",
  "ADMIN_EMAIL",
  "ADMIN_PASSWORD_HASH",
] as const;

type AppEnvKey = (typeof APP_ENV_KEYS)[number];

type AppEnv = {
  NODE_ENV: "development" | "test" | "production";
  APP_URL: string;
  DATABASE_URL: string;
  POSTGRES_DB: string;
  POSTGRES_USER: string;
  POSTGRES_PASSWORD: string;
  POSTGRES_PORT: string;
  AUTH_SECRET: string;
  AUTH_URL: string;
  ADMIN_EMAIL: string;
  ADMIN_PASSWORD_HASH: string;
};

type EnvSource = Partial<Record<AppEnvKey, string | undefined>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NODE_ENVS = new Set<AppEnv["NODE_ENV"]>([
  "development",
  "test",
  "production",
]);

let cachedEnv: AppEnv | undefined;

function requireValue(source: EnvSource, key: AppEnvKey) {
  const value = source[key]?.trim();

  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }

  return value;
}

function requireUrl(source: EnvSource, key: AppEnvKey) {
  const value = requireValue(source, key);

  try {
    new URL(value);
  } catch {
    throw new Error(`Environment variable ${key} must be a valid URL.`);
  }

  return value;
}

function parseEnv(source: EnvSource): AppEnv {
  const nodeEnv = requireValue(source, "NODE_ENV");

  if (!NODE_ENVS.has(nodeEnv as AppEnv["NODE_ENV"])) {
    throw new Error(
      `Environment variable NODE_ENV must be one of: ${Array.from(NODE_ENVS).join(", ")}.`,
    );
  }

  const adminEmail = requireValue(source, "ADMIN_EMAIL");

  if (!EMAIL_PATTERN.test(adminEmail)) {
    throw new Error("Environment variable ADMIN_EMAIL must be a valid email address.");
  }

  const authSecret = requireValue(source, "AUTH_SECRET");

  if (authSecret.length < 32) {
    throw new Error("Environment variable AUTH_SECRET must be at least 32 characters long.");
  }

  const postgresPort = requireValue(source, "POSTGRES_PORT");
  const parsedPort = Number(postgresPort);

  if (!Number.isInteger(parsedPort) || parsedPort <= 0) {
    throw new Error("Environment variable POSTGRES_PORT must be a positive integer.");
  }

  const adminPasswordHash = requireValue(source, "ADMIN_PASSWORD_HASH");

  if (adminPasswordHash.length < 20) {
    throw new Error(
      "Environment variable ADMIN_PASSWORD_HASH must look like a password hash, not a raw password.",
    );
  }

  return {
    NODE_ENV: nodeEnv as AppEnv["NODE_ENV"],
    APP_URL: requireUrl(source, "APP_URL"),
    DATABASE_URL: requireUrl(source, "DATABASE_URL"),
    POSTGRES_DB: requireValue(source, "POSTGRES_DB"),
    POSTGRES_USER: requireValue(source, "POSTGRES_USER"),
    POSTGRES_PASSWORD: requireValue(source, "POSTGRES_PASSWORD"),
    POSTGRES_PORT: postgresPort,
    AUTH_SECRET: authSecret,
    AUTH_URL: requireUrl(source, "AUTH_URL"),
    ADMIN_EMAIL: adminEmail,
    ADMIN_PASSWORD_HASH: adminPasswordHash,
  };
}

export function getEnv(source: EnvSource = process.env): AppEnv {
  cachedEnv ??= parseEnv(source);
  return cachedEnv;
}

export function getRequiredEnvKeys() {
  return [...APP_ENV_KEYS];
}

export type { AppEnv };
