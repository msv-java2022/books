﻿positionForPages[62]={page:62,positions:[{w:"44",p:[0.218575,0.131763,0.240552,0.131763,0.240552,0.118359,0.218575,0.118359,0.010988,0.010988]},{w:"Chapter 4. Conditionals and recursion",p:[0.475045,0.131763,0.853449,0.131763,0.853449,0.118359,0.475045,0.118359,0.015872,0.012209,0.010683,0.012209,0.008546,0.010027,0.008976,0.007325,0.010988,0.006105,0.017093,0.015872,0.010988,0.012209,0.012209,0.006105,0.008546,0.006105,0.010988,0.012209,0.010683,0.006105,0.008669,0.007325,0.010683,0.012209,0.012209,0.007325,0.008976,0.010027,0.009767,0.012209,0.008976,0.008669,0.006105,0.010988,0.012209]},{w:"4.8",p:[0.218575,0.173116,0.259012,0.173116,0.259012,0.153814,0.218575,0.153814,0.015823,0.008791,0.015823]},{w:"Recursion",p:[0.290658,0.173116,0.427950,0.173116,0.427950,0.153814,0.290658,0.153814,0.023604,0.014439,0.014065,0.017581,0.012926,0.012484,0.008791,0.015823,0.017581]},{w:"I mentioned in the last chapter that it is legal for one method to invoke",p:[0.218575,0.206413,0.853443,0.206413,0.853443,0.193009,0.218575,0.193009,0.006900,0.008830,0.015940,0.008501,0.010080,0.007439,0.005313,0.009564,0.010627,0.008501,0.010627,0.008830,0.005313,0.010627,0.008830,0.007439,0.010627,0.008501,0.008810,0.005313,0.009564,0.007544,0.007439,0.008830,0.007974,0.010627,0.009564,0.010627,0.007439,0.008501,0.007439,0.008810,0.007439,0.010627,0.009564,0.007439,0.008830,0.005313,0.007439,0.008830,0.005313,0.007544,0.008830,0.005313,0.008501,0.009564,0.009564,0.005313,0.008810,0.005845,0.009564,0.007439,0.008830,0.009564,0.010627,0.008501,0.008830,0.015940,0.008501,0.007439,0.010607,0.010111,0.010627,0.008810,0.007439,0.009564,0.008830,0.005313,0.010099,0.009568,0.009564,0.009549,0.008501]},{w:"another, and we have seen several examples. I neglected to mention that it",p:[0.218575,0.224653,0.853459,0.224653,0.853459,0.211249,0.218575,0.211249,0.009564,0.010627,0.009564,0.007439,0.010627,0.008501,0.007439,0.005313,0.006993,0.009564,0.010627,0.010627,0.006876,0.013287,0.008501,0.006857,0.010627,0.009037,0.009568,0.008501,0.006876,0.007544,0.008501,0.008501,0.010627,0.006857,0.007544,0.008501,0.009568,0.008501,0.007439,0.009564,0.005313,0.006876,0.008501,0.010095,0.009564,0.015940,0.010627,0.005313,0.008501,0.007544,0.005313,0.009982,0.006900,0.006876,0.010627,0.008501,0.009564,0.005313,0.008501,0.008501,0.007439,0.008501,0.010627,0.006876,0.007439,0.009564,0.006857,0.015940,0.008501,0.010099,0.007439,0.005313,0.009564,0.010627,0.006876,0.007439,0.010627,0.009564,0.007439,0.006876,0.005313,0.007439]},{w:"is also legal for a method to invoke itself. It may not be obvious why that is",p:[0.218575,0.242893,0.853443,0.242893,0.853443,0.229489,0.218575,0.229489,0.005313,0.007544,0.006095,0.009564,0.005313,0.007544,0.009564,0.006095,0.005313,0.008501,0.009564,0.009564,0.005313,0.006095,0.005845,0.009564,0.007439,0.006095,0.009564,0.006095,0.015940,0.008501,0.007439,0.010627,0.010092,0.010627,0.006095,0.007439,0.009564,0.006095,0.005313,0.010099,0.009568,0.009564,0.009549,0.008501,0.006114,0.005294,0.007439,0.007564,0.008482,0.005313,0.005845,0.005313,0.008419,0.006900,0.007439,0.006095,0.015940,0.009037,0.010095,0.006095,0.010627,0.009564,0.007439,0.006095,0.011154,0.008501,0.006095,0.009564,0.010099,0.010095,0.005313,0.009564,0.010627,0.007544,0.006095,0.013815,0.010080,0.010095,0.006095,0.007439,0.010627,0.009564,0.007439,0.006095,0.005313,0.007544]},{w:"a good thing, but it turns out to be one of the most magical and interesting",p:[0.218575,0.261133,0.853443,0.261133,0.853443,0.247729,0.218575,0.247729,0.009564,0.006212,0.009564,0.010092,0.010092,0.010627,0.006212,0.007439,0.010627,0.005313,0.010627,0.009564,0.005313,0.006232,0.010627,0.010627,0.007439,0.006212,0.005313,0.007439,0.006212,0.007439,0.010627,0.007439,0.010627,0.007544,0.006192,0.009564,0.010627,0.007439,0.006212,0.007439,0.009564,0.006212,0.011154,0.008501,0.006212,0.009564,0.010627,0.008501,0.006192,0.009564,0.005845,0.006212,0.007439,0.010627,0.008501,0.006212,0.015940,0.009564,0.007544,0.007439,0.006192,0.015940,0.009564,0.009564,0.005313,0.008501,0.009564,0.005313,0.006212,0.009564,0.010627,0.010627,0.006212,0.005313,0.010080,0.007439,0.008501,0.007439,0.008501,0.007544,0.007439,0.005313,0.010627,0.009564]},{w:"things a program can do.",p:[0.218575,0.279373,0.429080,0.279373,0.429080,0.265969,0.218575,0.265969,0.007439,0.010627,0.005313,0.010627,0.009564,0.007544,0.006368,0.009564,0.006388,0.010627,0.007439,0.009564,0.009564,0.007439,0.009564,0.015940,0.006368,0.008501,0.009564,0.010627,0.006368,0.010627,0.009564,0.005313]},{w:"For example, look at the following method:",p:[0.218575,0.309195,0.580130,0.309195,0.580130,0.295791,0.218575,0.295791,0.010881,0.009564,0.007439,0.006388,0.008501,0.010095,0.009564,0.015940,0.010627,0.005313,0.008501,0.005313,0.006368,0.005313,0.010092,0.009564,0.010095,0.006368,0.009564,0.007439,0.006388,0.007439,0.010627,0.008501,0.006368,0.005845,0.009564,0.005313,0.005313,0.009037,0.013815,0.005313,0.010627,0.009564,0.006368,0.015940,0.008501,0.007439,0.010627,0.010092,0.010627,0.005313]},{w:"public static void",p:[0.238680,0.333254,0.419621,0.333254,0.419621,0.320680,0.238680,0.320680,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052,0.010060,0.010033,0.010052,0.010052,0.010052,0.010052,0.010052,0.010060,0.010052,0.010052,0.010052,0.010052]},{w:"countdown(",p:[0.429682,0.333254,0.530187,0.333254,0.530187,0.320680,0.429682,0.320680,0.010033,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052]},{w:"int",p:[0.530187,0.333254,0.560345,0.333254,0.560345,0.320680,0.530187,0.320680,0.010052,0.010052,0.010052]},{w:"n) {",p:[0.570405,0.333254,0.610604,0.333254,0.610604,0.320680,0.570405,0.320680,0.010052,0.010052,0.010041,0.010052]},{w:"if",p:[0.258784,0.351859,0.278889,0.351859,0.278889,0.339285,0.258784,0.339285,0.010052,0.010052]},{w:"(n == 0) {",p:[0.288950,0.351859,0.389459,0.351859,0.389459,0.339285,0.288950,0.339285,0.010052,0.010052,0.010041,0.010052,0.010052,0.010060,0.010052,0.010052,0.010041,0.010052]},{w:"System.out.println(",p:[0.278889,0.370464,0.469887,0.370464,0.469887,0.357889,0.278889,0.357889,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052]},{w:"\\Blastoff!\\",p:[0.469887,0.370464,0.580465,0.370464,0.580465,0.357889,0.469887,0.357889,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052]},{w:");",p:[0.580465,0.370464,0.600550,0.370464,0.600550,0.357889,0.580465,0.357889,0.010033,0.010052]},{w:"}",p:[0.258784,0.389067,0.268837,0.389067,0.268837,0.376493,0.258784,0.376493,0.010052]},{w:"else",p:[0.278897,0.389067,0.319107,0.389067,0.319107,0.376493,0.278897,0.376493,0.010052,0.010052,0.010052,0.010052]},{w:"{",p:[0.329148,0.389067,0.339201,0.389067,0.339201,0.376493,0.329148,0.376493,0.010052]},{w:"System.out.println(n);",p:[0.278889,0.407672,0.500044,0.407672,0.500044,0.395098,0.278889,0.395098,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052]},{w:"countdown(n-1);",p:[0.278889,0.426277,0.429677,0.426277,0.429677,0.413703,0.278889,0.413703,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052]},{w:"}",p:[0.258784,0.444881,0.268837,0.444881,0.268837,0.432307,0.258784,0.432307,0.010052]},{w:"}",p:[0.238680,0.463486,0.248732,0.463486,0.248732,0.450912,0.238680,0.450912,0.010052]},{w:"The name of the method is",p:[0.218575,0.487854,0.458007,0.487854,0.458007,0.474450,0.218575,0.474450,0.013815,0.010627,0.008501,0.008751,0.010627,0.009564,0.015940,0.008501,0.008771,0.009564,0.005845,0.008751,0.007439,0.010627,0.008501,0.008771,0.015940,0.008482,0.007439,0.010627,0.010111,0.010627,0.008751,0.005313,0.007544]},{w:"countdown",p:[0.466768,0.488277,0.557241,0.488277,0.557241,0.475703,0.466768,0.475703,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052]},{w:"and it takes a single integer as a",p:[0.565998,0.487854,0.853443,0.487854,0.853443,0.474450,0.565998,0.474450,0.009564,0.010627,0.010627,0.008751,0.005313,0.007439,0.008771,0.007439,0.009564,0.009568,0.008501,0.007544,0.008751,0.009564,0.008751,0.007544,0.005313,0.010627,0.009564,0.005313,0.008501,0.008771,0.005313,0.010099,0.007439,0.008501,0.009564,0.008501,0.007439,0.008751,0.009564,0.007544,0.008751,0.009564]},{w:"parameter. If the parameter is zero, it prints the word “Blastoﬀ.” Otherwise,",p:[0.218575,0.506094,0.853443,0.506094,0.853443,0.492690,0.218575,0.492690,0.010627,0.009564,0.007439,0.009564,0.015940,0.008501,0.007439,0.008501,0.007439,0.005313,0.008048,0.006900,0.005845,0.005001,0.007439,0.010627,0.008501,0.005001,0.010627,0.009564,0.007439,0.009564,0.015940,0.008501,0.007439,0.008501,0.007439,0.005001,0.005313,0.007544,0.005020,0.008501,0.008501,0.007439,0.009564,0.005313,0.005274,0.005313,0.007439,0.005001,0.010627,0.007439,0.005313,0.010099,0.007439,0.007544,0.005001,0.007439,0.010627,0.008501,0.005020,0.013287,0.009564,0.007419,0.010627,0.005020,0.009564,0.013545,0.005313,0.009564,0.007544,0.007439,0.009564,0.011158,0.005313,0.009564,0.008048,0.014858,0.007439,0.010627,0.008501,0.007439,0.013815,0.005313,0.007544,0.008501,0.005313]},{w:"it prints the number and then invokes a method named",p:[0.218575,0.524334,0.678866,0.524334,0.678866,0.510929,0.218575,0.510929,0.005313,0.007439,0.005900,0.010627,0.007439,0.005313,0.010099,0.007439,0.007544,0.005900,0.007439,0.010627,0.008501,0.005900,0.010080,0.010627,0.015413,0.011154,0.008501,0.007439,0.005900,0.009564,0.010627,0.010627,0.005900,0.007439,0.010627,0.008501,0.010627,0.005900,0.005313,0.010099,0.009568,0.009564,0.009549,0.008501,0.007544,0.005900,0.009564,0.005900,0.015940,0.008501,0.007439,0.010627,0.010092,0.010627,0.005900,0.010627,0.009564,0.015940,0.008501,0.010627]},{w:"countdown",p:[0.684770,0.524756,0.775242,0.524756,0.775242,0.512182,0.684770,0.512182,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052]},{w:"—itself—",p:[0.775240,0.524334,0.853453,0.524334,0.853453,0.510929,0.775240,0.510929,0.019128,0.005313,0.007439,0.007544,0.008501,0.005313,0.005845,0.019128]},{w:"passing",p:[0.218575,0.542574,0.279359,0.542574,0.279359,0.529169,0.218575,0.529169,0.010627,0.009564,0.007544,0.007544,0.005313,0.010627,0.009564]},{w:"n-1",p:[0.285734,0.542996,0.315891,0.542996,0.315891,0.530422,0.285734,0.530422,0.010052,0.010052,0.010052]},{w:"as an argument.",p:[0.322266,0.542574,0.456790,0.542574,0.456790,0.529169,0.322266,0.529169,0.009564,0.007544,0.006368,0.009564,0.010627,0.006388,0.009564,0.007439,0.009564,0.010627,0.015940,0.008501,0.010080,0.007439,0.005313]},{w:"What happens if we invoke this method, in",p:[0.218575,0.572396,0.580083,0.572396,0.580083,0.558991,0.218575,0.558991,0.019652,0.010627,0.009564,0.007439,0.006368,0.010627,0.009564,0.010627,0.011154,0.008501,0.010627,0.007544,0.006388,0.005313,0.005845,0.006368,0.013287,0.008501,0.006368,0.005313,0.010099,0.009568,0.009564,0.009568,0.008501,0.006368,0.007439,0.010627,0.005313,0.007544,0.006368,0.015940,0.008501,0.007439,0.010627,0.010092,0.010627,0.005313,0.006388,0.005313,0.010627]},{w:"main",p:[0.586453,0.572818,0.626663,0.572818,0.626663,0.560244,0.586453,0.560244,0.010052,0.010052,0.010052,0.010052]},{w:", like this:",p:[0.626662,0.572396,0.709645,0.572396,0.709645,0.558991,0.626662,0.558991,0.005313,0.006368,0.005313,0.005313,0.009568,0.008501,0.006368,0.007439,0.010627,0.005313,0.007544,0.005313]},{w:"countdown(3);",p:[0.258784,0.596455,0.389467,0.596455,0.389467,0.583881,0.258784,0.583881,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052]},{w:"The execution of",p:[0.218575,0.620822,0.355884,0.620822,0.355884,0.607418,0.218575,0.607418,0.013815,0.010627,0.008501,0.004903,0.008501,0.010095,0.008501,0.008501,0.010627,0.007439,0.005313,0.009545,0.010627,0.004903,0.009564,0.005845]},{w:"countdown",p:[0.360784,0.621245,0.451257,0.621245,0.451257,0.608671,0.360784,0.608671,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052]},{w:"begins with",p:[0.456150,0.620822,0.550952,0.620822,0.550952,0.607418,0.456150,0.607418,0.011154,0.008501,0.009564,0.005313,0.010627,0.007544,0.004903,0.013815,0.005313,0.007439,0.010627]},{w:"n=3",p:[0.555843,0.621245,0.586001,0.621245,0.586001,0.608671,0.555843,0.608671,0.010052,0.010052,0.010052]},{w:", and since",p:[0.586000,0.620822,0.672699,0.620822,0.672699,0.607418,0.586000,0.607418,0.005313,0.005196,0.009564,0.010627,0.010627,0.004884,0.007544,0.005313,0.010627,0.008501,0.008501]},{w:"n",p:[0.677605,0.621245,0.687657,0.621245,0.687657,0.608671,0.677605,0.608671,0.010052]},{w:"is not zero, it prints",p:[0.692554,0.620822,0.853441,0.620822,0.853441,0.607418,0.692554,0.607418,0.005313,0.007544,0.004903,0.010627,0.009564,0.007439,0.004884,0.008501,0.008501,0.007439,0.009564,0.005313,0.005196,0.005313,0.007439,0.004903,0.010627,0.007439,0.005313,0.010080,0.007439,0.007544]},{w:"the value 3, and then invokes itself...",p:[0.218575,0.639062,0.525363,0.639062,0.525363,0.625658,0.218575,0.625658,0.007439,0.010627,0.008501,0.006368,0.009041,0.009564,0.005313,0.010627,0.008501,0.006368,0.009564,0.005313,0.006388,0.009564,0.010627,0.010627,0.006368,0.007439,0.010627,0.008501,0.010627,0.006368,0.005313,0.010099,0.009568,0.009564,0.009549,0.008501,0.007544,0.006388,0.005313,0.007439,0.007544,0.008501,0.005313,0.005845,0.005313,0.005313,0.005313]},{w:"The execution of",p:[0.266394,0.676767,0.407356,0.676767,0.407356,0.663362,0.266394,0.663362,0.013815,0.010627,0.008501,0.006720,0.008501,0.010095,0.008501,0.008501,0.010627,0.007439,0.005313,0.009564,0.010627,0.006720,0.009564,0.005845]},{w:"countdown",p:[0.414080,0.677190,0.504553,0.677190,0.504553,0.664615,0.414080,0.664615,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052]},{w:"begins with",p:[0.511273,0.676767,0.607891,0.676767,0.607891,0.663362,0.511273,0.663362,0.011154,0.008501,0.009564,0.005313,0.010627,0.007544,0.006720,0.013815,0.005313,0.007439,0.010627]},{w:"n=2",p:[0.614618,0.677190,0.644775,0.677190,0.644775,0.664615,0.614618,0.664615,0.010052,0.010052,0.010052]},{w:", and since",p:[0.644775,0.676767,0.734931,0.676767,0.734931,0.663362,0.644775,0.663362,0.005313,0.006818,0.009564,0.010627,0.010627,0.006720,0.007544,0.005313,0.010627,0.008501,0.008501]},{w:"n",p:[0.741647,0.677190,0.751700,0.677190,0.751700,0.664615,0.741647,0.664615,0.010052]},{w:"is not",p:[0.758422,0.676767,0.805629,0.676767,0.805629,0.663362,0.758422,0.663362,0.005313,0.007544,0.006720,0.010627,0.009564,0.007439]},{w:"zero, it prints the value 2, and then invokes itself...",p:[0.266394,0.695007,0.692839,0.695007,0.692839,0.681602,0.266394,0.681602,0.008501,0.008501,0.007439,0.009564,0.005313,0.006368,0.005313,0.007439,0.006388,0.010627,0.007439,0.005313,0.010080,0.007439,0.007544,0.006388,0.007439,0.010627,0.008501,0.006368,0.009041,0.009564,0.005313,0.010627,0.008501,0.006368,0.009564,0.005313,0.006368,0.009564,0.010627,0.010627,0.006388,0.007439,0.010627,0.008501,0.010627,0.006368,0.005313,0.010099,0.009549,0.009564,0.009568,0.008501,0.007544,0.006388,0.005313,0.007439,0.007544,0.008501,0.005313,0.005845,0.005313,0.005313,0.005313]},{w:"The execution of",p:[0.308474,0.721336,0.446037,0.721336,0.446037,0.707932,0.308474,0.707932,0.013815,0.010627,0.008501,0.005020,0.008501,0.010095,0.008501,0.008501,0.010627,0.007439,0.005313,0.009564,0.010627,0.005020,0.009564,0.005845]},{w:"countdown",p:[0.451046,0.721759,0.541518,0.721759,0.541518,0.709185,0.451046,0.709185,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052]},{w:"begins with",p:[0.546534,0.721336,0.641453,0.721336,0.641453,0.707932,0.546534,0.707932,0.011154,0.008501,0.009564,0.005313,0.010627,0.007544,0.005020,0.013815,0.005313,0.007439,0.010627]},{w:"n=1",p:[0.646471,0.721759,0.676628,0.721759,0.676628,0.709185,0.646471,0.709185,0.010052,0.010052,0.010052]},{w:", and since",p:[0.676626,0.721336,0.763559,0.721336,0.763559,0.707932,0.676626,0.707932,0.005313,0.005294,0.009564,0.010627,0.010627,0.005020,0.007544,0.005313,0.010627,0.008501,0.008501]},{w:"n",p:[0.308474,0.739998,0.318526,0.739998,0.318526,0.727423,0.308474,0.727423,0.010052]},{w:"is not zero, it prints the value 1, and then invokes",p:[0.326750,0.739575,0.763552,0.739575,0.763552,0.726171,0.326750,0.726171,0.005313,0.007544,0.008224,0.010627,0.009564,0.007439,0.008224,0.008501,0.008501,0.007439,0.009564,0.005313,0.008673,0.005313,0.007439,0.008224,0.010627,0.007439,0.005313,0.010099,0.007439,0.007544,0.008224,0.007439,0.010627,0.008501,0.008224,0.009021,0.009564,0.005313,0.010627,0.008501,0.008224,0.009564,0.005313,0.008693,0.009564,0.010627,0.010627,0.008224,0.007439,0.010627,0.008501,0.010627,0.008224,0.005313,0.010080,0.009568,0.009564,0.009568,0.008501,0.007544]},{w:"itself...",p:[0.308474,0.757815,0.364370,0.757815,0.364370,0.744410,0.308474,0.744410,0.005313,0.007439,0.007544,0.008501,0.005313,0.005845,0.005313,0.005313,0.005313]},{w:"The execution of",p:[0.344242,0.784016,0.485145,0.784016,0.485145,0.770611,0.344242,0.770611,0.013815,0.010627,0.008501,0.006700,0.008501,0.010095,0.008501,0.008501,0.010627,0.007439,0.005313,0.009564,0.010627,0.006681,0.009564,0.005845]},{w:"countdown",p:[0.491851,0.784438,0.582324,0.784438,0.582324,0.771864,0.491851,0.771864,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052]},{w:"begins with",p:[0.589020,0.784016,0.685618,0.784016,0.685618,0.770611,0.589020,0.770611,0.011154,0.008501,0.009564,0.005313,0.010627,0.007544,0.006700,0.013815,0.005313,0.007439,0.010627]},{w:"n=0",p:[0.692314,0.784438,0.722471,0.784438,0.722471,0.771864,0.692314,0.771864,0.010052,0.010052,0.010052]},{w:",",p:[0.722469,0.784016,0.727782,0.784016,0.727782,0.770611,0.722469,0.770611,0.005313]},{w:"and since",p:[0.344242,0.802255,0.430452,0.802255,0.430452,0.788851,0.344242,0.788851,0.009564,0.010627,0.010627,0.014905,0.007544,0.005313,0.010627,0.008501,0.008501]},{w:"n",p:[0.445343,0.802678,0.455396,0.802678,0.455396,0.790104,0.445343,0.790104,0.010052]},{w:"is zero, it prints the word",p:[0.470296,0.802255,0.727786,0.802255,0.727786,0.788851,0.470296,0.788851,0.005313,0.007544,0.014905,0.008501,0.008501,0.007439,0.009564,0.005313,0.017015,0.005313,0.007439,0.014905,0.010627,0.007439,0.005313,0.010099,0.007439,0.007544,0.014885,0.007439,0.010627,0.008501,0.014905,0.013287,0.009564,0.007439,0.010627]},{w:"“Blastoﬀ!” and then returns.",p:[0.344242,0.820495,0.588355,0.820495,0.588355,0.807091,0.344242,0.807091,0.009564,0.013545,0.005313,0.009564,0.007544,0.007439,0.009564,0.012526,0.005313,0.009564,0.008498,0.009564,0.010627,0.010627,0.006368,0.007439,0.010627,0.008501,0.010627,0.006368,0.007439,0.008501,0.007439,0.010627,0.007439,0.010627,0.007544,0.005313]},{w:"The",p:[0.308474,0.846696,0.341417,0.846696,0.341417,0.833292,0.308474,0.833292,0.013815,0.010627,0.008501]},{w:"countdown",p:[0.347792,0.847119,0.438265,0.847119,0.438265,0.834545,0.347792,0.834545,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052,0.010052]},{w:"that got",p:[0.444637,0.846696,0.512641,0.846696,0.512641,0.833292,0.444637,0.833292,0.007439,0.010627,0.009564,0.007439,0.006368,0.009564,0.009564,0.007439]},{w:"n=1",p:[0.519021,0.847119,0.549179,0.847119,0.549179,0.834545,0.519021,0.834545,0.010052,0.010052,0.010052]},{w:"returns.",p:[0.555554,0.846696,0.620483,0.846696,0.620483,0.833292,0.555554,0.833292,0.007439,0.008501,0.007439,0.010627,0.007439,0.010627,0.007544,0.005313]}]};