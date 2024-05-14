var button = document.createElement('button')
button.textContent = 'Byte';

button.style.position = 'fixed';
button.style.right = '20px';
button.style.top = '50px';
button.style.backgroundColor = '#2B3348';
button.style.color = 'rgba(255, 255, 255, 0.877)';
button.style.zIndex = '1000';
button.style.borderRadius = '50%';
button.style.width = '50px';
button.style.height = '50px';

document.body.appendChild(button)


button.addEventListener('click', function() {
    button.remove();

    var translatorBox = document.createElement('div')
    translatorBox.style.position = 'fixed';
    translatorBox.style.top = '50px';
    translatorBox.style.right = '20px';
    translatorBox.style.zIndex = '1000';
    translatorBox.style.borderRadius = '10px';
    translatorBox.style.width = '300px';
    translatorBox.style.height = '535px';
    translatorBox.style.backgroundColor = '#121214';
    translatorBox.style.textAlign = 'center';
    translatorBox.style.justifyContent = 'center';
    translatorBox.style.paddingBottom = '30px';

    var  backContainer = document.createElement('div');

    backContainer.style.height = '23px';
    backContainer.style.margin = '10px';
    backContainer.style.display = 'flex';
    backContainer.style.justifyContent = 'space-between';

    var backButton = document.createElement('button');

    var backSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    backSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    backSvg.setAttribute("height", "24px");
    backSvg.setAttribute("viewBox", "0 -960 960 960");
    backSvg.setAttribute("width", "24px");
    backSvg.setAttribute("fill", "#D3D3D4");

    var pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
    pathElement.setAttribute("d", "m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z");

    var backtextNode = document.createTextNode('Quill2Byte');

    backSvg.appendChild(pathElement);
    backContainer.appendChild(backtextNode);
    backButton.appendChild(backSvg);

    var inputContainer = document.createElement('div')
    inputContainer.style.backgroundColor = '#252427';
    inputContainer.style.width = '90%';
    inputContainer.style.height = '45%';
    inputContainer.style.margin = '15px';
    inputContainer.style.borderRadius = '10px';

    var form = document.createElement('form')
    form.method = 'post';

    var selectField = document.createElement('select')

    var option1 = new Option('Translate to', '');
    var option2 = new Option('Modern English', 'modern');
    var option3 = new Option('Early English', 'early');
    selectField.add(option1);
    selectField.add(option2);
    selectField.add(option3);
    selectField.style.backgroundColor = '#252427';
    selectField.style.width = '100%';
    selectField.style.color = '#D3D3D4';
    selectField.style.borderTopLeftRadius = '10px';
    selectField.style.borderTopRightRadius = '10px';
    selectField.style.textAlign = 'center';
    selectField.style.outline = 'none';
    selectField.style.border = 'none';
    selectField.style.borderBottom = '1px solid #39393D';

    var inputField = document.createElement('textarea')
    inputField.placeholder = 'Enter Text';
    inputField.style.resize = 'none';
    inputField.style.outline = 'none';
    inputField.style.border = 'none';
    inputField.style.backgroundColor = '#252427';
    inputField.style.height = '135px';
    inputField.style.width = '95%';
    inputField.style.color = 'white';

    var submitButton = document.createElement('button')
    submitButton.style.display = 'flex';
    submitButton.style.position = 'relative';
    submitButton.style.gap = '1px';
    submitButton.style.left = '5px';
    submitButton.style.color = '#D3D3D4';
    submitButton.style.justifyContent = 'center';
    submitButton.style.alignItems = 'center';
    submitButton.style.padding = '5px';
    submitButton.style.borderRadius = '7px';

    var submitSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    submitSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    submitSvg.setAttribute("height", "20");
    submitSvg.setAttribute("viewBox", "0 -960 960 960");
    submitSvg.setAttribute("width", "20");
    submitSvg.style.fill = '#D3D3D4';

    var pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
    pathElement.setAttribute("d", "M762-96 645-212l-88 88-28-28q-23-23-23-57t23-57l169-169q23-23 57-23t57 23l28 28-88 88 116 117q12 12 12 28t-12 28l-50 50q-12 12-28 12t-28-12Zm118-628L426-270l5 4q23 23 23 57t-23 57l-28 28-88-88L198-96q-12 12-28 12t-28-12l-50-50q-12-12-12-28t12-28l116-117-88-88 28-28q23-23 57-23t57 23l4 5 454-454h160v160ZM334-583l24-23 23-24-23 24-24 23Zm-56 57L80-724v-160h160l198 198-57 56-174-174h-47v47l174 174-56 57Zm92 199 430-430v-47h-47L323-374l47 47Zm0 0-24-23-23-24 23 24 24 23Z");
    submitSvg.appendChild(pathElement);

    var textNode = document.createTextNode('Translate');

    submitButton.appendChild(submitSvg)
    submitButton.appendChild(textNode)

    form.appendChild(selectField)
    form.appendChild(inputField)
    form.appendChild(submitButton)

    var outputContainer = document.createElement('div')
    outputContainer.style.backgroundColor = '#2B3348';
    outputContainer.style.width = '90%';
    outputContainer.style.height = '45%';
    outputContainer.style.margin = '15px';
    outputContainer.style.padding = '2px';
    outputContainer.style.borderRadius = '10px';

    var outputBox = document.createElement('div')
    outputBox.style.margin = '10px';
    outputBox.style.height = '163px';
    outputBox.style.backgroundColor = '#2B3348';
    outputBox.style.overflowY = 'scroll';
    outputBox.style.overflowX = 'hidden';

    var outputText = document.createElement('div')
    outputText.textContent = '';
    outputText.style.backgroundColor = '#2B3348';
    outputText.style.padding = '5px';
    outputText.style.whiteSpace = 'pre-wrap';
    outputText.style.overflowWrap = 'break-word';
    outputText.style.textAlign = 'left';
    outputText.style.color = 'rgba(255, 255, 255, 0.877)';
    outputBox.appendChild(outputText)

    var copyButton = document.createElement('button')
    copyButton.style.display = 'flex';
    copyButton.style.position = 'absolute';
    copyButton.style.left = '24px';
    copyButton.style.padding = '5px';
    copyButton.style.borderRadius = '20px';

    var copySvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    copySvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    copySvg.setAttribute("height", "20");
    copySvg.setAttribute("viewBox", "0 -960 960 960");
    copySvg.setAttribute("width", "20");
    copySvg.style.fill = '#D3D3D4';

    var copyPathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
    copyPathElement.setAttribute("d", "M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z");
    copySvg.appendChild(copyPathElement)
    copyButton.appendChild(copySvg)

    backContainer.appendChild(backButton);
    outputContainer.appendChild(outputBox)
    outputContainer.appendChild(copyButton)

    inputContainer.appendChild(form)
    translatorBox.appendChild(backContainer)
    translatorBox.appendChild(inputContainer)
    translatorBox.appendChild(outputContainer)
    document.body.appendChild(translatorBox)

    submitButton.addEventListener('mouseover', function() {
        submitButton.style.backgroundColor = '#343336';
    });

    submitButton.addEventListener('mouseout', function() {
        submitButton.style.backgroundColor = '';
    });

    copyButton.addEventListener('mouseover', function() {
        copyButton.style.backgroundColor = '#39435c';
    });

    copyButton.addEventListener('mouseout', function() {
        copyButton.style.backgroundColor = '';
    });    
    
    copyButton.addEventListener('click', (event) => {
        event.preventDefault();
        const textValue = outputText.textContent;
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

        svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        svg.setAttribute("height", "20");
        svg.setAttribute("viewBox", "0 -960 960 960");
        svg.setAttribute("width", "20");
        svg.style.fill = '#D3D3D4';

        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", "M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z");

        svg.appendChild(path);


        if (navigator.clipboard) {
            navigator.clipboard.writeText(textValue)
                .then(() => {
                    console.log('Text copied to clipboard successfully');
                    copyButton.innerHTML = '';
                    copyButton.appendChild(svg);
                    setTimeout(function() {
                        copyButton.innerHTML = '';
                        copyButton.appendChild(copySvg);
                    }, 3000);
                })
                .catch((error) => {
                    console.error('Unable to copy text to clipboard:', error);
                });
        } else {
            console.warn('Clipboard API not supported');
        }
    });

    submitButton.addEventListener('click', function(event) {
        event.preventDefault();
        console.log('Submit button clicked');
        const formInputValue = inputField.value;
        const formSelectValue = selectField.value;
        const formData = { formInputValue, formSelectValue };
        chrome.runtime.sendMessage({ type: 'formData', data: formData }, function(response) {
            console.log(response);
        });
    });

    backButton.addEventListener('click', function() {
        translatorBox.remove();
        document.body.appendChild(button);
    });

    chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
        console.log('message received from bgd.js:', message.jsonData['translate']);
        outputText.textContent = message.jsonData['translate'];
    });
});

