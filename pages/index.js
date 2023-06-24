import withAuth from '../components/withAuth'

function Home(){
  return (<h1>Welcome page</h1>)
}
export default withAuth(Home);