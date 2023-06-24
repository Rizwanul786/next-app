import withAuth from '../components/withAuth';

function About(){
    return (<h1>About page</h1>)
  }
  export default withAuth(About);