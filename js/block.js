(function() {
	let protectionTriggered = false;

	function antiDebugLoop() {
        let start = performance.now();
        debugger;
        if (performance.now() - start > 100) {
            triggerProtection();
        }
        setTimeout(antiDebugLoop, 500);
    }

    function loadProtectedCode() {
        const protectedLogic = function() {
            console.log("Защищенный код выполнен");
            document.getElementById('secure-content').innerHTML = 
                "Контент, защищенный от анализа";
        };
        setTimeout(protectedLogic.toString() + ';protectedLogic();', 0);
    }

    window.addEventListener('load', function() {
        setTimeout(loadProtectedCode, 1000);
        document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
        });
        setTimeout(antiDebugLoop, 2000);
    });

    const secureElements = {
        getContentDiv: function() {
            return document.getElementById('secure-content');
        }
    };

	let lastWidth = window.innerWidth;
    let lastHeight = window.innerHeight;

    const resizeObserver = new ResizeObserver(() => {
        const widthDiff = Math.abs(window.innerWidth - lastWidth);
        const heightDiff = Math.abs(window.innerHeight - lastHeight);
        if (widthDiff > 10 || heightDiff > 10) {
            triggerProtection();
        }
        lastWidth = window.innerWidth;
        lastHeight = window.innerHeight;
    });

	function triggerProtection() {
        if (!protectionTriggered) {
            protectionTriggered = true;
            window.location.href = "/videos/Righthere.mp4";
        }
    }

    resizeObserver.observe(document.body);

    Object.freeze(secureElements);
    Object.freeze(window.__proto__);

    (function loop() {
        setTimeout(loop, 1000);
        (function() {
            return Function('debugger')();
        })();
    })();
})();
