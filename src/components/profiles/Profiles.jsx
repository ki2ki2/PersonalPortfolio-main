import React from "react";
import "./profiles.css";
import { SiCodechef, SiHackerrank } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";

const Profiles = () => {
  return (
    <section id="profiles">
      <h5>Coding Skills</h5>
      <h2>Coding Profiles</h2>

      <div className="container profile__container">
        <article className="profile__option">
          <SiGeeksforgeeks className="profile__option-icon" />
          {/* <h5>stepheneliazer18</h5> */}
          <h4>GeeksForGeeks</h4>
          <h5 className="light-grey">77 Institite Rank</h5>
          <a
            href="https://auth.geeksforgeeks.org/user/kritikumari36312"
            target="_blank"
          >
            View Profile
          </a>
        </article>

        <article className="profile__option">
          <SiLeetcode className="profile__option-icon" />
          <h4>Leetcode</h4>
          <h5 className="light-grey">1000+ Problems</h5>
          <a href="https://leetcode.com/kritikumari36312/" target="_blank">
            View Profile
          </a>
        </article>

        {/* <article className="profile__option">
          <SiCodechef className="profile__option-icon" />
          <h5>stephen18</h5> 
          <h4>Codechef</h4>
          <h5 className="light-grey">1630 Highest Rating</h5>
          <a href="https://www.codechef.com/users/ki2ki2" target="_blank">
            View Profile
          </a>
        </article> */}
        {/* <article className="profile__option">
          <SiHackerrank className="profile__option-icon" />
          <h4>HackerRank</h4>
          <h5 className="light-grey">1600+ Score</h5>
          <a
            href="https://www.hackerrank.com/profile/kriti31" target="_blank">
            View Profile
          </a>
        </article> */}
      </div>
    </section>
  );
};

export default Profiles;
