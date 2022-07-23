export default function ({ store, redirect }) {
//Here we can check if the user is not authenticated or something in our case we will always redirect the user to the appointments page
    return redirect(301, '/appointments');
}