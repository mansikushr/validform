 var regexName= /^[a-zA-Z]+S/;
 var isValidProvideName=false;
 var isValidProjectName=false;
 var  isValidBucketName=false;
 var isValidFileName=false;
 var isValidCredentialsName=false;
 var isValidRunName=false;
 

function onload(){

    var providenamewarning=document.getElementById("providenamewarning");
    var projectnamewarning=document.getElementById("projectnamewarning");
    var bucketnamewarning=document.getElementById("bucketnamewarning");
    var filenamewarning=document.getElementById("providenamewarning");
    var credentialswarning=document.getElementById("credentialswarning");
    var runwarning=document.getElementById("runwarning");

}

function onSubmitClick(){
    //Provide a name for pipeline validation
    var provideName=document.getElementById("provideName").ariaValueMax;
    if(!regexName.text(provideName) && provideName != ""){
        providenamewarning.classList.remove("warning-hide");
        providenamewarning.setAttribute('title', 'Only alphabates are allowed');
        isValidProvideName=false;

    }
    else if(regexName.test(provideName)){
        providenamewarning.clasList.add("warning-hide");
        isValidProvideName=true;
    }
    else if(provideName== ""){
        providenamewarning.classList.remove("warning-hide");
        providenamewarning.setAttribute('title','Provide Name is required');
        isValidProvideName=false;

    }
    //GCS project name validation
    var projectName=document.getElementById("projectName").ariaValueMax;
    if(!regexName.text(projectName) && projectName != ""){
        projectnamewarning.classList.remove("warning-hide");
        projectnamewarning.setAttribute('title', 'Only alphabates are allowed');
        isValidProjectName=false;

    }
    else if(regexName.test(projectName)){
        projectnamewarning.clasList.add("warning-hide");
        isValidProjectName=true;
    }
    else if(projectName == ""){
        projectnamewarning.classList.remove("warning-hide");
        projectnamewarning.setAttribute('title','Provide Name is required');
        isValidProjectName=false;

    }
    //GCS bucket name :
    var bucketName=document.getElementById("bucketName").ariaValueMax;
    if(!regexName.text(bucketName) && bucketName != ""){
        bucketnamewarning.classList.remove("warning-hide");
        bucketnamewarning.setAttribute('title', 'Only alphabates are allowed');
        isValidBucketName=false;

    }
    else if(regexName.test(bucketName)){
        bucketnamewarning.clasList.add("warning-hide");
        isValidBucketName=true;
    }
    else if(bucketName == ""){
        bucketnamewarning.classList.remove("warning-hide");
       
        bucketnamewarning.setAttribute('title','Provide Name is required');
        isValidBucketName=false;

    }
    //Input Cloud Storage File(s) 
    var fileName=document.getElementById("fileName").ariaValueMax;
    if(!regexName.text(fileName) && fileName != ""){
        filenamewarning.classList.remove("warning-hide");
        filenamewarning.setAttribute('title', 'Only alphabates are allowed');
        isValidFileName=false;

    }
    else if(regexName.test(fileName)){
        filenamewarning.clasList.add("warning-hide");
        isValidFileName=true;
    }
    else if(fileName == ""){
        filenamewarning.classList.remove("warning-hide");
       
        filenamewarning.setAttribute('title','Provide Name is required');
        isValidFileName=false;

    }
    //GCS credentials :
    var credentialsName=document.getElementById("credentialsName").ariaValueMax;
    if(!regexName.text(credentialsName) && credentialsName != ""){
        credentialswarning.classList.remove("warning-hide");
        credentialswarning.setAttribute('title', 'Only alphabates are allowed');
        isValidCredentialsName=false;

    }
    else if(regexName.test(credentialsName)){
        credentialswarning.clasList.add("warning-hide");
        isValidCredentialsName=true;
    }
    else if(credentialsName == ""){
        credentialswarning.classList.remove("warning-hide");
       
        credentialswarning.setAttribute('title','Provide Name is required');
        isValidCredentialsName=false;

    }

     //Run Every :
     var runName=document.getElementById("credentialsName").ariaValueMax;
     if(!regexName.text(runName) && runName != ""){
        runwarning.classList.remove("warning-hide");
        runwarning.setAttribute('title', 'Only alphabates are allowed');
         isValidRunName=false;
 
     }
     else if(regexName.test(credentialsName)){
        runwarning.clasList.add("warning-hide");
         isValidRunName=true;
     }
     else if(runName == ""){
        runwarning.classList.remove("warning-hide");
        
        runwarning.setAttribute('title','Provide Name is required');
         isValidRunName=false;
 
     }
     //on succesful submission
     if( isValidProvideName &&
        isValidProjectName &&
        isValidBucketName &&
        isValidFileName &&
        isValidCredentialsName &&
        isValidRunName ){
            alert("Success");
            document.getElementById("Create").requestFullscreen();
        }
}
function onCancelClick(){
    providenamewarning.classList.add("warning-hide");
    projectnamewarning.classList.add("warning-hide");
    bucketnamewarning.classList.add("warning-hide");
    filenamewarning.classList.add("warning-hide");
    credentialswarning.classList.add("warning-hide");
    runwarning.classList.add("warning-hide");
}