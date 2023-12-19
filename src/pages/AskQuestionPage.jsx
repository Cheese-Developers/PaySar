import React, { useEffect, useState } from "react";
import CreateForm from "../components/Ask&Question/CreateForm";
import { useParams } from "react-router-dom";
import "./page.css";
import Cookies from "js-cookie";
import { useUserInfoQuery } from "../redux/service/api/userApi";
import UserSelection from "../components/Ask&Question/UserSelection";
import UserInformation from "../components/Ask&Question/UserInformation";
import SectionText from "../components/ui/SectionText";
import Vector from "../svg/Vector.svg";

const default_img =
  "https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg";

const AskQuestionPage = () => {
  const { name } = useParams();
  const token = Cookies.get("token");
  const [selectedUser, setSelectedUser] = useState(null);
  const { data, isLoading } = useUserInfoQuery(name);

  useEffect(() => {
    if (data) {
      const stringyData = JSON.stringify(data);

      const expirationTimeInMinutes = 45;
      const expirationDate = new Date(
        new Date().getTime() + expirationTimeInMinutes * 60 * 1000
      );

      Cookies.set("user", stringyData, { expires: expirationDate });
    }
  }, [data]);

  return (
    <div className="pt-32">
      <SectionText>
        <div className="flex flex-col justify-center items-center text-secondary w-[95%] md:w-[80%] lg:w-[70%] xl:w-[65%] mx-auto h-full z-[2]">
          <h3 className="text-4xl font-semibold font-curve mb-4 text-center drop-shadow-2xl">
            ✍️ Share Your Thoughts!
          </h3>
          <p className="text-xl font-semibold mb-4 text-center drop-shadow-xl">
            Wondering how your day is unfolding? Need an outlet? We're here to
            hear you out—always by your side.
          </p>
          <p className="text-xl font-semibold drop-shadow-xl">
            What's on your mind today?
          </p>
        </div>
      </SectionText>

      <div className="bg-slate-950/90 min-h-full">
        <img src={Vector} alt="" className="w-screen" />

        {isLoading ? (
          <div className="h-screen text-5xl text-white flex justify-center items-center">
            Loading...
          </div>
        ) : (
          <div className="py-12 w-[95%] md:w-[80%] lg:w-[70%] xl:w-[65%] mx-auto">
            <UserInformation
              data={data}
              token={token}
              default_img={default_img}
            />
          </div>
        )}
        {token && (
          <UserSelection
            token={token}
            selectedUser={selectedUser}
            setSelectedUser={setSelectedUser}
            default_img={default_img}
          />
        )}
        <CreateForm userInfo={data} selectedUser={selectedUser} />
      </div>
    </div>
  );
};

export default AskQuestionPage;
