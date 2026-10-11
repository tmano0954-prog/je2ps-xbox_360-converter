#include <iostream>
#include <emscripten/emscripten.h>

extern "C" {
    EMSCRIPTEN_KEEPALIVE
    int initialize_converter() {
        std::cout << "JE2BE C++ Core Initialized Successfully." << std::endl;
        return 1;
    }

    EMSCRIPTEN_KEEPALIVE
    int convert_world_buffer(const char* input_data, int length) {
        std::cout << "Received world buffer of " << length << " bytes for conversion." << std::endl;
        return 0; 
    }
}

