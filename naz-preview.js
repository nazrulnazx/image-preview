function uploadPreview(THIS, preview) {
    var reader = new FileReader();
    reader.onload = function (e) {
        var imgPreview = document.getElementsByClassName(preview);
        if (imgPreview.length > 0) {
            for (var i = 0; i < imgPreview.length; i++) {
                el = imgPreview[i];
                el.setAttribute('src', e.target.result);
            }
        } else {
            el = imgPreview[0];
            el.setAttribute('src', e.target.result);
        }
    }
    reader.readAsDataURL(THIS.files[0]);
} 
