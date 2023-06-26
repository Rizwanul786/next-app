import Layout from '@/components/layout';
import withAuth from '../components/withAuth';

function About(){
    return (<Layout>
      <div className="container">
          <h1>About page</h1>
      </div>
    </Layout>)
  }
  export default withAuth(About);