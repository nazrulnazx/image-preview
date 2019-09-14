1 Include "naz-preview.js" Javascript in your HTML page.

2 Add the below attribute on your file input element.

  onchange="uploadPreview(this,'img-preview')"
  
  example:
  <input type="file" onchange="uploadPreview(this,'img-preview')" name="doc_image">
  
3 Add the img html element where you wish to display the preview.

   example:
   <img class="img-preview" style="width:300px;" />
   Note : The class name "img-preview" was passed as second argument in uploadPreview() function, first will be always this.
   
Please find the sample file index.html for refrence and uasge. You can download and modify as per need & use case.
