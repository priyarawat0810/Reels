import { Link, Redirect } from "react-router-dom";
import { auth, firestore, storage } from "./firebase";
import { AuthContext } from "./AuthProvider";
import { useContext, useEffect, useState } from "react";
import "./Home.css";
import VideoCard from "./VideoCard";

let Home = () => {
  let value = useContext(userContext);

  let [posts, setPosts] = useState([]);

  useEffect(() => {
    let unsubscription = firestore
      .collection("posts")
      .onSnapshot((querySnapshot) => {
        setPosts(
          querySnapshot.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          })
        );
      });
    //unsub from listening to changes on posts collection when home component is unmounted
    return () => {
      unsubscription();
    };
  }, []);

  return (
    <div>
      {value ? (
        <>
          <div className="posts-container">
            {posts.map((post, index) => {
              return <VideoCard key={index} post={post} />;
            })}
          </div>
          <button
            className="logout-btn"
            onClick={() => {
              auth.signOut();
            }}
          >
            Logout
          </button>
          <Link to="/profile">
            <button id="profile">Profile</button>
          </Link>
          <input
            // //whenever click on input file tag set its value to null so that even if we select same file the tag will feel we have done some changes and it will call onChange
            // onClick={(e) => {
            //   e.target.value = null;
            // }}
            onClick={(e) => {
              e.target.value = null;
            }}
            onChange={(e) => {
              if (!e.target.files[0]) return;

              //get file name size and type
              let { name, size, type } = e.target.files[0];
              //store the selected file so that we can upload it later on
              let file = e.target.files[0];

              //convert the file size into mb
              size = size / 1000000;
              //get file type
              type = type.split("/")[0];

              //checks
              if (type != "video") {
                alert("Please upload a video");
                return;
              }

              if (size > 10) {
                alert("File is too big!");
                return;
              }
              //f1 function passed to state_changed event for upload progress
              let f1 = (snapshot) => {
                console.log(snapshot.bytesTransferred);
                console.log(snapshot.totalBytes);
              };

              //f2 function passed to state_changed event for error handling
              let f2 = (error) => {
                console.log(error);
              };

              //f3 function passed to state_changed event which executes when file is uploaded
              //so that we can get the uploaded file url
              let f3 = () => {
                //getDownloadURL method is used to generate the url, it gives a promise
                let p = uploadTask.snapshot.ref.getDownloadURL();
                p.then((url) => {
                  firestore.collection("posts").add({
                    username: value.displayName,
                    url,
                    like: 0,
                    comments: [],
                  });
                });
              };

              let uploadTask = storage
                .ref(`/posts/${value.uid}/${name}`)
                .put(file);

              uploadTask.on("state_changed", f1, f2, f3);
            }}
            //upload
            className="upload-btn"
            type="file"
          />
          Upload
        </>
      ) : (
        <Redirect to="/" />
      )}
    </div>
  );
};

export default Home;
