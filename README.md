# Java & Bedrock to Xbox 360 / PS3 World Converter

A web-based Minecraft world converter built with Next.js, C++, and WebAssembly. It runs entirely inside your browser client-side, allowing you to convert Java Edition and Bedrock Edition save files into legacy console formats (Xbox 360 STFS containers and PlayStation 3) without server overhead.

## Project Structure
- `cpp/`: Core C++ parsing and container engines for NBT, Anvil regions, and Xbox 360 STFS / PS3 formats.
- `src/app/`: Next.js App Router frontend interface.
- `scripts/`: Build automation scripts for compiling C++ to WebAssembly via Emscripten.

