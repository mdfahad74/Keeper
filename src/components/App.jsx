import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [contents,setContents] = useState([]);
  
  function deleteNote(id){
    setContents(prevValues => {
      return prevValues.filter((item,index)=>{
        return index!==id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea 
      set={setContents}
      contents={contents}
      />
      {contents.map((cont,index) => {
      return <Note key={index} delete={deleteNote} id={index} title={cont.title} content={cont.content} />
      })}
      <Footer />
    </div>
  );
}

export default App;
