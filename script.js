function displayFileName(uploadId) {
    const input = document.getElementById(uploadId);
    //const numericPart = uploadId.match(/\d+/)[0]; // Extract numeric part using regex
    const numericPart = uploadId.replace(/^\D+/g, ''); // Extract numeric part using regex
    //const fileNameDisplay = document.getElementById(`upNotif${uploadId.slice(-1)}`); // Extract the numeric part from the ID
    const fileNameDisplay = document.getElementById(`upNotif${numericPart}`); // Extract the numeric part from the ID

    
    if (input.files.length > 0) {
      fileNameDisplay.textContent = `Selected file for: `+ uploadId + ": " + input.files[0].name ;
    } else {
      fileNameDisplay.textContent = 'No file selected';
    }
  }
  

  function clearAllFiles() {
    const fileInputs = document.querySelectorAll('.upload_input');
    const fileDisplayAreas = document.querySelectorAll('[id^="upNotif"]');
    
    fileInputs.forEach(input => {
      input.value = ''; // Reset the value of each file input
    });
  
    fileDisplayAreas.forEach(displayArea => {
      displayArea.textContent = 'No file selected'; // Update each display area to show no file selected
    });
  }