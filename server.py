from __future__ import annotations

import os
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path


class StaticSiteHandler(SimpleHTTPRequestHandler):
    protocol_version = "HTTP/1.1"

    def end_headers(self) -> None:
        self.send_header("Cache-Control", "no-cache")
        super().end_headers()


def main() -> None:
    port = int(os.environ.get("PORT", "8080"))
    default_root = Path(__file__).resolve().parent / "docker"
    root = Path(os.environ.get("STATIC_ROOT", str(default_root))).resolve()
    handler = partial(StaticSiteHandler, directory=str(root))
    server = ThreadingHTTPServer(("0.0.0.0", port), handler)
    server.serve_forever()


if __name__ == "__main__":
    main()
