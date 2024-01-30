const addButton = () => {
    const jsInitCheckTimer = setInterval( jsLoaded, 100 );

    function jsLoaded( event ) {
        if ( document.querySelector( ".r-header-row" ) != null ) {
            clearInterval( jsInitCheckTimer );
            let header     = document.querySelector( ".r-header-row" );
            let controlbar = document.querySelector( ".vjs-control-bar" );
            let button     = document.createElement( "button" );
            button.className = "cstm_zoom_button";

            button.textContent = "Control bar display ON/OFF";

            if( header ) {
                header.appendChild( button );

                let cstm_zoom_btn = document.querySelector( ".cstm_zoom_button" );

                cstm_zoom_btn.addEventListener( "click", function () {
                    if ( controlbar.style.display == "none" ) {
                        controlbar.style.display = "block";
                    } else {
                        controlbar.style.display = "none";
                    }
                } );
            } else {
                console.log( "header not found" );
            }
        }
    }
}

window.addEventListener( 'load', () => addButton(), false);