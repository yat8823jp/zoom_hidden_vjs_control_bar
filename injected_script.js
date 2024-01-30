chrome.tabs.onUpdated.addListener( function( tabId, changeInfo, tab ) {
    console.log( "loaded" );
    if ( changeInfo.status === 'complete' ) {
        const injectScript = () => {
            let script = document.create( 'script' );
            script.setAttribute( "src", chrome.runtime.getURL( 'content_script.js' ) );
            ( document.head || document.documentElement ).appendChild( script );
            script.remove;
        }
    }
} );