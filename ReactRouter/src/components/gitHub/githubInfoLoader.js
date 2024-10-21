//6.] pass it inside {} as it is a known variable not unknown paramerter
const githubInfoLoader = async ({params}) => {   // the loader function directlly/automaticaaly gets params so no need to directly make useParams 

    const {userName} = params
    const response = await fetch(`https://api.github.com/users/${userName}`)
    // const data =  await response.json();
    return response.json(); // returning a promise
}

export default githubInfoLoader;