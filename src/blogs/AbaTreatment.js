import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Pic1 from "../images/abatherapy1.png";
import Pic2 from "../images/abatherapy2.png";
import Pic3 from "../images/abatherapy3.png";
import Pic4 from "../images/abatherapy4.png";
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
import { Link } from "react-router-dom";

const AbaTreatment = () => {
  const url = window.location.href;
  return (
    <div>
      <Navbar />
      <div className="md:flex md:mx-28 mx-3 md:pt-28 pt-20 mb-16">
        <div className=" md:w-[70%]">
          <div className="md:flex mb-4">
            <div className="text-3xl md:my-4 my-2 font-bold">
              What is ABA therapy for Autism?
            </div>
            <div className="md:ml-20 relative md:top-6">
              {" "}
              ~ Posted on 23 Jun 2022
            </div>
          </div>
          <img src={Pic1} alt="" className="my-4" />
          <div className="my-4">
            Applied Behavior Analysis (ABA) is a therapeutic intervention that
            uses reward approaches to enhance social, communication, and
            learning abilities.{" "}
          </div>
          <div className="my-4">
            It focuses on specific skill acquisition such as fine motor
            dexterity, sanitation, and grooming, in addition to increasing
            general adaptive behaviors such as social skills and learning
            abilities. It has also been demonstrated that frequent ABA therapy
            may greatly enhance positive abilities and behaviors while
            decreasing the need for future special assistance.
          </div>
          <div className="my-4">Who can benefit from ABA therapy?</div>
          <div className="my-4">
            ABA is beneficial for both children and adults with psychological
            disorders. Since the 1960s, therapists have utilized ABA to assist
            children with autism and other developmental issues. The treatment
            targets:
          </div>
          <div className="">• Language and social communication skills.</div>
          <div className="">
            • Attention, focus, memory, and academic performance.
          </div>
          <div className="">
            • Behavioural issues like defiance, negative attention-seeking, and
            outbursts.
          </div>
          <div className="text-2xl font-bold my-4">How does it function?</div>
          <div className="my-4">
            ABA is adapted to your child's requirements. It is divided into two
            phases:
          </div>
          <div className="text-xl font-bold my-4">
            Consultation and evaluation
          </div>
          <div className="my-4">
            First, you should speak with an ABA-trained therapist or child
            psychologist. This is known as a functional behavior evaluation
            (FBA). The therapist will inquire about your child's skills and
            talents and the areas they find difficult.
          </div>
          <div className="my-4">
            They will engage with your child to assess their communication
            level, behavior, and abilities. They may also visit your home and
            school to observe your child's typical activities.
          </div>
          <img src={Pic2} alt="" className="my-4 w-[60%] relative left-[20%]" />
          <div className="text-xl font-bold my-4">Making a strategy</div>
          <div className="my-4">
            The therapist will use the information gathered during the interview
            to create a therapy plan for your child. This plan must be tailored
            to your child's individual needs and include specific treatment
            goals.
          </div>
          <div className="my-4">
            These goals frequently include decreasing harmful or destructive
            behaviors, such as self-injury or tantrums, as well as improving
            communication and other talents.
          </div>
          <div className="my-4">
            The plan will also include particular strategies that caretakers,
            educators, and therapists may employ to achieve therapeutic
            objectives. Everyone engaged in your child's care will be on the
            same page as a result of this.
          </div>
          <div className="text-2xl font-bold my-4">
            Components of an ABA program
          </div>
          <div className="text-xl font-bold my-4">
            Positive reinforcement learning
          </div>
          <div className="my-4">
            In ABA, the most commonly employed strategy is positive
            reinforcement. When an activity is followed by something the child
            enjoys, like a reward, they are more inclined to repeat it. This
            supports positive changes in behaviour over time.
          </div>
          <div className="my-4">
            The therapist starts by determining the desired behavior. Then, a
            reward is given to them each time the person successfully applies
            the behavior. Individually applicable incentives include praise, a
            high five, a gift or a book, access to the park, and other things.
            Positive reinforcement motivates the individual to keep practicing
            the skill. As a result, considerable behavioral change occurs over
            time.
          </div>
          <img src={Pic3} alt="" className="w-[60%] relative left-[20%]" />
          <div className="text-2xl font-bold">
            Antecedent, Behavior, and Consequence
          </div>
          <div className="my-4">
            Another critical component of any ABA program is understanding the
            action that occurs before a behavior (antecedent) and one that
            follows a particular behavior (consequence).
          </div>
          <div className="my-4">
            The three steps listed below could help you understand behavior:
          </div>
          <div className="my-4">
            An antecedent refers to something that occurs before the planned
            activity. It can be a command or request made to the child. It might
            be something concrete, like a toy, or something in the environment,
            like music. An antecedent might be discovered in one's surroundings,
            other people, or within oneself.
          </div>
          <div className="my-4">
            The child's reaction to an antecedent or lack thereof is
            characterized as behaviour. It might be a vocal reaction, a gesture,
            or something else entirely.
          </div>
          <div className="my-4">
            Any event that directly results from the conduct is referred to as a
            consequence. Positive reinforcement of desirable behavior might be
            included.
          </div>
          <div className="text-2xl font-bold my-4">
            What is the proof that ABA works?
          </div>
          <div className="my-4">
            The American Psychological Association and the US Surgeon General
            regard ABA as the best treatment based on evidence. More than 15
            research studies have found rigorous ABA program to improve outcomes
            for many children with autism. "Intensive" and "long-term" programs
            deliver 20 to 40 hours of therapy per week for 1 to 3 years. These
            studies demonstrate improvements in language, cognition, daily
            living abilities, and social interaction. Adult studies utilizing
            ABA principles, albeit less, indicate similar improvements.
          </div>
          <div className="text-2xl font-bold my-4">
            The controversy surrounding ABA
          </div>
          <div className="my-4">
            In recent years, there has been much discussion about ABA. Many
            autistic people are outspoken in their opposition to ABA. Some of
            the reasons that ABA draws criticism from them are”
          </div>
          <div className="">
            • The human right of a kid to say "no" is violated by ABA.
          </div>
          <div className="">
            • Children subjected to this practice are bullied and made fun of.
          </div>
          <div className="">
            • Some ABA practitioners may still use negative reinforcement like
            physical punishments, which can lead to lowered self-esteem and,
            worse cases, trauma.
          </div>
          <div className="">
            • ABA therapists are excessively rigorous and fail to recognize a
            child's uniqueness.
          </div>
          <div className="my-4">
            Many of these concerns originate from the technique's early origins.
          </div>
          <div className="my-4">
            It used to take up to 40 hours of therapy every week. Much of this
            time was spent sitting at a desk or table, performing duties.
            Punishment was frequently utilized to address undesirable behavior.
            There was also a lot of emphasis on making kids "normal." Current
            best practices in ABA work on positive reinforcement for improving
            skills and reducing harmful behaviours.
          </div>
          <img src={Pic4} alt="" className="w-[60%] relative left-[20%]" />
          <div className="text-2xl my-4 font-bold">Final Thoughts</div>
          <div className="my-4">
            Nowadays, people increasingly understand the importance of
            neurodiversity, which refers to the various ways in which the human
            brain may work. As a result, ASD treatment is shifting away from
            attempting to "fix" individuals with ASD. Instead, treatment focuses
            on modifying problematic habits, helping children acquire the skills
            and qualities required for a successful, independent life. Unwanted
            conduct is typically overlooked rather than penalized by therapists
            nowadays.
          </div>
          <div className="my-4">
            The basic fact is that ABA has helped many children with ASD master
            developmental skills. However, it may not be the best choice for all
            children, and parents need to speak with experts if their child
            requires ABA therapy.
          </div>

          <div className="md:flex mt-12">
            <div className="">Share This With Your Friends</div>
            <div className="flex md:text-lg text-[10px] my-5 md:my-0">
              <FacebookShareButton url={url}>
                <div className="flex cursor-pointer border-solid border-blue-900 border-2 px-2 py-1 mx-1 rounded-md relative bottom-1">
                  <FaFacebookF className="relative top-1 text-blue-900" />
                  <div className="md:ml-3 ml-2 text-blue-900 font-bold">
                    SHARE
                  </div>
                </div>
              </FacebookShareButton>
              <TwitterShareButton url={url}>
                <div className="flex cursor-pointer border-solid border-blue-400 border-2 px-2 py-1 mx-1 rounded-md relative bottom-1">
                  <BsTwitter className="relative top-1 text-blue-400" />
                  <div className="md:ml-3 ml-2 text-blue-400 font-bold">
                    TWEET
                  </div>
                </div>
              </TwitterShareButton>
              <WhatsappShareButton url={url}>
                <div className="flex cursor-pointer border-solid border-emerald-600 border-2 px-2 py-1 mx-1 rounded-md relative bottom-1">
                  <BsWhatsapp className="relative top-1 text-emerald-600" />
                  <div className="md:ml-3 ml-2 text-emerald-600 font-bold">
                    SHARE
                  </div>
                </div>
              </WhatsappShareButton>
              <div className="flex cursor-pointer border-solid border-orange border-2 px-2 py-1 mx-1 rounded-md relative bottom-1">
                <RiSignalTowerFill className="relative top-1 text-orange" />
                <div className="md:ml-3 ml-2 text-orange font-bold">
                  SUBSCRIBE
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[27%]">
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
                <Link to={`${props.link}`}>
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
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AbaTreatment;
