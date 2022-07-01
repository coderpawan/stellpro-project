import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Pic1 from "../images/ManageADHD1.png";
import Pic2 from "../images/ManageADHD2.png";
import Pic3 from "../images/ManageADHD3.png";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { RiSignalTowerFill } from "react-icons/ri";
import { IoDocumentTextOutline } from "react-icons/io5";
import Recommended from "../data/RecommendedData";
import {
  WhatsappShareButton,
  FacebookShareButton,
  TwitterShareButton,
} from "react-share";

const ManageADHD = () => {
  const url = window.location.href;
  return (
    <div>
      <Navbar />
      <div className="flex mx-28 pt-28 mb-16">
        <div className=" w-[70%]">
          <div className="flex">
            <div className="text-3xl my-4 font-bold">
              Methods to manage a child's ADHD in school
            </div>
            <div className="ml-20 relative top-6"> ~ Posted on 23 Jun 2022</div>
          </div>
          <img src={Pic1} alt="" className="w-[60%] relative left-[20%]" />
          <div className="my-4">
            Professionals diagnose Attention deficit hyperactivity disorder
            (ADHD) with attention, impulse control, and hyperactivity. It
            commonly appears in childhood, but it may not be recognized until
            puberty or maturity in some cases. According to the National
            Institute of Mental Health (NIMH), around 9% of children and
            adolescents in the United States have ADHD.{" "}
          </div>
          <div className="my-4">
            Children with ADHD may experience trouble paying attention once they
            begin school. As a result, parents and schools will need to
            collaborate to assist children in learning to manage ADHD symptoms.
          </div>
          <div className="text-2xl font-bold my-4">
            How does ADHD manifest itself in a classroom?
          </div>
          <div className="my-4">
            ADHD substantially impacts a child's ability to sit still, pay
            attention, and regulate urges. Children are fidgety, busy,
            hyperactive, and forgetful by nature. However, for children with
            ADHD, these symptoms will adversely interfere with their behavior
            and response in multiple settings, necessitating interventions.
          </div>
          <div className="my-4">
            Common classroom behaviors that instructors may witness in children
            with ADHD include
          </div>
          <div className="">• Frequently neglects assignments</div>
          <div className="">• Frequently found daydreaming</div>
          <div className="">• Making "careless errors"</div>
          <div className="">• Answering quickly or speaking out of turn</div>
          <div className="">
            • Frequently misplacing items, such as books and pencil boxes
          </div>
          <div className="">• Having difficulty organizing goods and tasks</div>
          <div className="">
            • Having difficulty sitting still, often shifting and fidgeting
          </div>
          <div className="text-2xl font-bold my-4">
            How can you help children with ADHD in class?
          </div>
          <div className="my-4">
            Children with ADHD are sometimes misconstrued as troublemakers or
            challenging to control in the classroom because they can't seem to
            sit still or follow directions.
          </div>
          <div className="my-4">
            So, here are some strategies that teachers can include to support a
            child with ADHD better and make school more enjoyable and fruitful
            for them.
          </div>
          <div className="text-xl font-bold my-4">
            1. &nbsp;&nbsp;Open communication between parents and instructors
          </div>
          <div className="my-4">
            It is critical to keep instructors informed when a child is
            diagnosed with ADHD. To promote and reward acceptable behaviour, use
            a reward system, such as stickers or a points chart. This can help
            instructors and parents collaborate to apply the best techniques for
            the kid. A teacher may not completely adjust the classroom to the
            kid's needs, but they will be able to accommodate some of them and,
            most importantly, understand and support your child better.
          </div>
          <div className="my-4">
            From handling problematic behavior to providing breaks when the
            child requires them, a teacher will be able to help the child.
          </div>
          <div className="text-xl font-bold my-4">
            2. &nbsp;&nbsp;Make a list of instructions
          </div>
          <img src={Pic2} alt="" className="w-[60%] relative left-[20%]" />
          <div className="my-4">
            Important instructions and schedules must be written down in a list
            or chart and kept somewhere the child can find them when needed.
            This can assist the youngster in keeping track of homework,
            assignment deadlines, and crucial school days and obligations.{" "}
          </div>
          <div className="my-4">
            Students may also find it helpful to underline essential material
            with a colored marker and keep a binder, particularly jotting down
            daily instructions. Parents should ensure to fulfill these
            requirements as well.
          </div>
          <div className="text-xl font-bold my-4">
            3. &nbsp;&nbsp;No cubbies on the flat desk
          </div>
          <div className="my-4">
            A desk with cubbies or drawers might tempt the child to take items
            in and out, fostering more fidgeting and cluttering. Furthermore,
            having the desk face the board can direct the child's focus on the
            board rather than having the desk meet another student or a window,
            where the youngster can easily be distracted by outside sounds and
            sights.
          </div>
          <div className="text-xl font-bold my-4">
            4. &nbsp;&nbsp;Teachers can allow for movement breaks
          </div>
          <div className="my-4">
            Sitting still all the time might be difficult for youngsters with
            ADHD. Therefore, it is critical to offer them small breaks between
            activities to allow them to exercise or stroll. A simple 5-minute
            stroll or a toilet break every 20-30 min will help children sit
            better in their seats for extended periods without needing to fidget
            continually.
          </div>
          <div className="text-xl font-bold my-4">
            5. &nbsp;&nbsp;Teachers can assign seating
          </div>
          <img src={Pic3} alt="" className="w-[60%] relative left-[20%]" />
          <div className="my-4">
            All children like sitting with their pals, but this implies that
            they will be more distracted since they may want to chat with the
            individuals sitting beside them. Hence, moving them to the front
            row, closer to the teacher, can be beneficial. The child may not
            realize it at the time, but it will undoubtedly benefit their
            learning.
          </div>
          <div className="text-xl font-bold my-4">
            6. &nbsp;&nbsp;Encourage the child to read aloud
          </div>
          <div className="my-4">
            This is very useful for submitting homework, quizzes, or essays.
            Reading aloud or rechecking answers before submitting them can help
            the child understand what they've written, frequently allowing them
            to hear and recognize their "careless mistakes."
          </div>
          <div className="text-xl font-bold my-4">
            7. &nbsp;&nbsp;Teachers can make use of graphics while teaching
          </div>
          <div className="my-4">
            Children with ADHD may have difficulty following long-spoken
            instructions. Thus, displaying the rules, utilizing visible cues
            like timers to assist children in managing time, and visual
            reminders such as "Stop and Listen" and "Homework" in the classroom
            may all be beneficial.
          </div>

          <div className="text-2xl my-4 font-bold">Final Thoughts</div>
          <div className="my-4">
            If you have an ADHD kid, keep in mind that academic achievement
            extends beyond assignments and reports. Your child may overcome
            educational obstacles with the correct assistance.
          </div>
          <div className="my-4">
            As a teacher, consider providing a quiet spot for students to
            utilize if the events in the classroom overwhelm them. Make this
            place multi-functional. This means it can be used to sit down and
            have some quiet time, or it can be utilized to move around if they
            are having difficulty being seated over long periods. Use rewards
            such as stickers and encouraging words to reinforce good behaviour,
            thus, fostering a healthy learning environment for the child.{" "}
          </div>

          <div className="flex mt-12">
            <div className="">Share This With Your Friends</div>
            <FacebookShareButton url={url}>
              <div className="flex cursor-pointer border-solid border-blue-900 border-2 px-2 py-1 mx-2 rounded-md relative bottom-1">
                <FaFacebookF className="relative top-1 text-blue-900" />
                <div className="ml-3 text-blue-900 font-bold">SHARE</div>
              </div>
            </FacebookShareButton>
            <TwitterShareButton url={url}>
              <div className="flex cursor-pointer border-solid border-blue-400 border-2 px-2 py-1 mx-2 rounded-md relative bottom-1">
                <BsTwitter className="relative top-1 text-blue-400" />
                <div className="ml-3 text-blue-400 font-bold">TWEET</div>
              </div>
            </TwitterShareButton>
            <WhatsappShareButton url={url}>
              <div className="flex cursor-pointer border-solid border-emerald-600 border-2 px-2 py-1 mx-2 rounded-md relative bottom-1">
                <BsWhatsapp className="relative top-1 text-emerald-600" />
                <div className="ml-3 text-emerald-600 font-bold">SHARE</div>
              </div>
            </WhatsappShareButton>
            <div className="flex cursor-pointer border-solid border-orange border-2 px-2 py-1 mx-2 rounded-md relative bottom-1">
              <RiSignalTowerFill className="relative top-1 text-orange" />
              <div className="ml-3 text-orange font-bold">SUBSCRIBE</div>
            </div>
          </div>
        </div>
        <div className="w-[27%]">
          <div className="border-solid border-2 border-gray-200 rounded-lg ml-5">
            <div className="flex relative left-3 mt-3 mb-2">
              <IoDocumentTextOutline className="text-orange-400" />
              <div className="text-[12px] font-bold text-orange-400 ml-1">
                RECOMMENDED CONTENT
              </div>
            </div>
            <div className="h-[2px] bg-gray-200 w-[90%] relative left-3"></div>
            {Recommended.map((props) => {
              return (
                <div className="flex my-3">
                  <img
                    src={props.image}
                    alt=""
                    className="h-14 relative left-3"
                  />
                  <div className="ml-5 text-[12px] mr-14 text-blue-500">
                    {props.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ManageADHD;
