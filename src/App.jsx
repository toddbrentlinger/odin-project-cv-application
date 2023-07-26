import Footer from './components/Footer';
import './styles/styles.scss';

function App() {
  return (
    <>
      <header>
        <h1>Odin CV Project</h1>
      </header>

      <main>
        {/* <GeneralInfoSection />
        <hr />
        <EducationSection />
        <hr />
        <ExperienceSection /> */}
      </main>

      <Footer
        initialYear={2023}
        sourceCodeUrl="https://github.com/toddbrentlinger/odin-cv-project-v2"
      />
    </>
  )
}

export default App
