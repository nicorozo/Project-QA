
const createRecordButton = document.getElementById('create-button')
const deleteRecordButton = document.getElementById('delete-button')

const fullName = document.getElementById('fld_fullname')
const companyName = document.getElementById('fld_company_name')
const fld_email = document.getElementById('fld_email')
const companyUrl = document.getElementById('fld_company_url')
const industryName = document.getElementById('fld_industry')
const fld_phone = document.getElementById('fld_phone')
const facebookUrl = document.getElementById('fld_fb_page')

const elementsArray = [fullName, companyName, fld_email, companyUrl, industryName, fld_phone, facebookUrl]

const token = 'WF4G7N2yKjDHpGVUaPoVqmxBgkCHGNxh';
const tableId = 114016;


fetch(`https://api.baserow.io/api/database/rows/table/${tableId}/`, {
    headers: {
        'Authorization': `Token ${token}`,
        'Content-Type': 'application/json'
    },
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));




createRecordButton.addEventListener('click', function (e) {

    e.preventDefault()

    const validatedArray = elementsArray.map((element) => validateInputs(element))

    console.log(validatedArray)
})

function errorHandling(element, message) {

    element.placeholder = message

    element.classList.add('error')

}
function success(element) {
    element.classList.remove('error')
}


function validateInputs(element) {

    // const fullNameValue = fullName.value.trim()
    // const companyNameValue = companyName.value.trim()
    // const fld_emailValue = fld_email.value.trim()
    // const companyUrlValue = companyUrl.value.trim()
    // const industryNameValue = industryName.value.trim()
    // const fld_phoneValue = fld_phone.value.trim()
    // const facebookUrlValue = facebookUrl.value.trim()
    console.log(element.name)
    if (element.value.trim() === '') {
        errorHandling(element, `${element.type} is required`)
        return false
    } else {
        success(element)
        return element.value.trim()
    }
}