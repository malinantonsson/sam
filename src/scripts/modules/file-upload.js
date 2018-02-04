export function fileUploads() {
  const fileUploadsButton = document.querySelectorAll('.file-upload');

  if(fileUploadsButton.length > 0) {
    const orgLabel = document.querySelector('.file-upload__label').innerHTML;
    const fileUploadsArray = [...fileUploadsButton];

    fileUploadsArray.map(field => {
    	field.addEventListener( 'change', function( e ) {
          field.classList.add('file-upload--is-complete');
    			const fileName = e.target.value.split( '\\' ).pop();
      		if( fileName ) {
            field.querySelector('.file-upload__label').innerHTML = fileName;
          } else {
            field.querySelector('.file-upload__label').innerHTML = orgLabel;
          }
    	});
    });

    const wpcf7Elm = document.querySelector( '.wpcf7' );

    wpcf7Elm.addEventListener( 'wpcf7submit', function( event ) {
        fileUploadsArray.map(field => {
          field.classList.remove('file-upload--is-complete');
          field.querySelector('.file-upload__label').innerHTML = orgLabel;
        });
    }, false );
  }
}
