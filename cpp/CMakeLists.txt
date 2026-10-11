cmake_minimum_required(VERSION 3.10)
project(je2be_core)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

set(SOURCES
    src/main.cpp
    src/nbt_reader.cpp
    src/anvil_parser.cpp
    src/stfs_xbox360.cpp
)

add_executable(je2be_core ${SOURCES})

set_target_properties(je2be_core PROPERTIES
    SUFFIX ".wasm"
    LINK_FLAGS "\
        -s WASM=1 \
        -s EXPORTED_FUNCTIONS='[\"_initialize_converter\", \"_convert_world_buffer\", \"_malloc\", \"_free\"]' \
        -s EXPORTED_RUNTIME_METHODS='[\"cwrap\", \"ccall\"]' \
        -s ALLOW_MEMORY_GROWTH=1 \
        -s MODULARIZE=0 \
        -O3"
)

