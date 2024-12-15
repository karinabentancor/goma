function changeProfileImage() {
    const fileInput = document.getElementById('fileInput');
    const profileImage = document.getElementById('profileImage');
    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            profileImage.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}

