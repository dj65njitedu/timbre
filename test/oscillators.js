tests = (function() {
    "use strict";
    
    var i = 0, tests = [];

    tests[i] = function() {
        return T("osc", "sin", 880, 0.5, -0.5);
    }; tests[i++].desc = "constructor: wavelet, freq, mul, add";
    
    tests[i] = function() {
        return T("osc", "sin", 220, 0.5).kr();
    }; tests[i++].desc = "kr() switch control-rate";
    
    tests[i] = function() {
        var wavefunc = function(x) { return x < 0.2 ? -1 : + 1; };
        return T("osc", wavefunc, 660, 0.5);
    }; tests[i++].desc = "assgin function to 1st argument";
    
    tests[i] = function() {
        var wavearray = new Float32Array([0, 0.25, 0.5, 0.75, 1.0]);
        return T("osc", wavearray, 440, 0.5);
    }; tests[i++].desc = "assgin Float32Array to 1st argument";
    
    tests[i] = function() {
        return T("osc", 440, 0.25).set("wavelet", "pulse");
    }; tests[i++].desc = "abbr argument";
    
    tests[i] = function() {
        var mod = T("osc", "sin", 8, 40, 880).kr();
        return T("osc", mod, 0.25).set("wavelet", "pulse");
    }; tests[i++].desc = "modulation";

    tests[i] = function() {
        return T("fami", 880, 0.5, -0.5);
    }; tests[i++].desc = 'alias: T("fami", ...) is T("osc", "fami", ...)';
    
    tests[i] = function() {
        return T("konami", 660, 0.5, -0.5);
    }; tests[i++].desc = 'alias: T("konami", ...) is T("osc", "konami", ...)';
    
    tests[i] = function() {
        var tone = timbre.utils.wavb("8084888C90989CA4ACB8C0CCE0002C50707C7C78746858483C3024181004F8E0E4E0F804101824303C48586874787C7C70502C00E0CCC0B8ACA49C98908C8884");
        return T("osc", tone, 440);
    }; tests[i++].desc = 'utils.wavb() define wavetable';
    
    tests[i] = function() {
        return T("noise");
    }; tests[i++].desc = "WhiteNoise";
    
    tests[i] = function() {
        return T("noise").kr();
    }; tests[i++].desc = "control-rate WhiteNoise";
    
    tests[i] = function() {
        var func = function(x) {
            return (x * x * x);
        };
        return T("func", func, 880);
    }; tests[i++].desc = "FuncOscillator";
    
    tests[i] = function() {
        var func = function(x) {
            return [ (x * x * x), -(x * x), x ];
        };
        return T("func", func, 3, 660);
    }; tests[i++].desc = "FuncOscillator";

    return tests;
}());
