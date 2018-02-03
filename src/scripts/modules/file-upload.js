export function fileUploads() {
  const fileUploadsButton = document.querySelectorAll('.file-upload');

  if(fileUploads) {
    const fileUploadsArray = [...fileUploadsButton];
    fileUploadsArray.map(field => {
    	field.addEventListener( 'change', function( e ) {
          field.classList.add('file-upload--is-complete');
    			const fileName = e.target.value.split( '\\' ).pop();

      		if( fileName ) {
            field.querySelector('.file-upload__label').innerHTML = fileName;
          }
    	});
    });
  }
}
