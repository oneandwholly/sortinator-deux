export const submitForm = (unsortedStr) => {
    let headers = new Headers();
    headers.set('Accept', 'application/json');

    let formData = new FormData();
    formData.append('unsortedStr', unsortedStr);

    return fetch('/sort', {
        method: 'POST',
        headers,
        body: formData
    });
}