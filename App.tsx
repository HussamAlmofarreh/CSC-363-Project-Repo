import './index.css';
import Layout from "./Layout";
import JobDescInput from "./JobDescInput";
import UploadResume from "./UploadResume";
import LogoTitle from "./LogoTitle";

function App() {
  return (
    <Layout>
      <LogoTitle />
      <JobDescInput />
      <UploadResume /> 
    </Layout>
  );
}

export default App;