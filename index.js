import { jokes } from './jokes'

jokes.getJoke().then(data => {
    document.getElementById('joke').innerHTML = data
})