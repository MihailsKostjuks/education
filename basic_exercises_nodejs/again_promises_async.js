const loadActivity = () => {
    return fetch('https://www.boredapi.com/api/activity/') // fetch returns promise. RETURN IS NEEDED
        .then(res => res.json()) // .then always takes as a parameter response of a promise
}

const getActivity = () => {
    loadActivity().
    then(data => console.log(data));
}

getActivity();

