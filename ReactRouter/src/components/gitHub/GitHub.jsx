import { useLoaderData } from "react-router-dom";
// 4.] this Hook is used for using api data fetched using loader
function GitHub() {

  //  1.]  const [data, setstate] = useState({});
  // this is the basic way to call the github api but
  //there are better ways to call api that are more
  //optimized like using loader to fetch api in main
  // useEffect(() => {
  //   fetch("https://api.github.com/users/Mannan-Ali")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setstate(data);
  //     });
  // }, []);


  // 5.] syntax for using useLoaderdata and storing its value in data 
  //neacuse of this we aslo dont need to fecth gitHubInfoFolder file as the data is fetched in useLoaderData
  const data = useLoaderData();
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      GitHub Followers: {data.followers}
      <h1 className="text-4xl font-bold mb-2">{data.name}</h1>
      <img className="rounded-full mx-auto mb-4" src={data.avatar_url} alt="Git picture" width={300} />
      <p className="text-lg text-gray-300">Public Repositories: {data.public_repos}</p>
      
    </div>
  );
}

export default GitHub;


// 3.] this function can also we made in different file 
// here we are calling the function that we go in the loader 
//the same can be done insdside loader 
//Note:  here there is no need to make data = response.json 
//as loader does not require it , just return response .json
// export const githubInfoLoader = async ()=>{
//   const response = await fetch("https://api.github.com/users/Mannan-Ali")
//   // const data =  await response.json();
//   return response.json(); // returning a promise
// }


//Fast refresh only works when a file only exports components. Use a new file to share constants or functions between components.eslint(react-refresh/only-export-components)
//beacouse of the follwing we are making a new js file and importing it from there insdide github