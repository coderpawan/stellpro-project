import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import OccupationalTherapy from "../images/occupational therapy.jpg";
import Pic1 from "../images/TipsADHD1.png";
import Pic2 from "../images/TipsADHD2.png";
import Pic3 from "../images/TipsADHD3.png";
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

const TipsADHD = () => {
  const url = window.location.href;
  return (
    <div>
      <Navbar />
      <div className="flex mx-28 pt-28 mb-16">
        <div className=" w-[70%]">
          <div className="text-3xl font-bold text-center my-8">
            Tips to parent of a child with ADHD
          </div>
          <img src={Pic1} alt="" className="w-[60%] relative left-[20%]" />
          <div className="my-4">
            Parenting is difficult. It's very fulfilling but also challenging,
            demanding, and exhausting. When children have ADHD, parenting issues
            magnify in quantity and severity. Signs of ADHD such as inattention,
            impulsivity, and emotional dysregulation have an unavoidable
            influence on everyday living. Thus, they inevitably affect parenting
            and the bond you build with your children.
          </div>
          <div className="my-4">
            Here's how ADHD parents may manage to raise happy, healthy,
            well-adjusted children.
          </div>
          <div className="text-2xl font-bold my-4">
            3 Main challenges of parenting children with ADHD
          </div>
          <div className="my-4">
            Any parent of children with ADHD will come across:
          </div>
          <div className="font-bold font-xl my-4">
            1. &nbsp;&nbsp;Difficulties with self-regulation.
          </div>
          <img src={Pic2} alt="" className="w-[60%] relative left-[20%]" />
          <div className="my-4">
            Self-regulation is known as the capacity to regulate your emotions
            and conduct yourself in line with the demands of a circumstance. A
            child with ADHD has difficulty with self-regulation. Hence they
            frequently throw tantrums in public.{" "}
          </div>
          <div className="my-4">
            Also, children with ADHD struggle with emotional regulation,
            exhibiting aggression, impulsivity, emotional outbursts, and severe
            mood changes. All these behaviors can make parenting quite
            challenging.
          </div>
          <div className="font-bold font-xl my-4">
            2. &nbsp;&nbsp;Inconsistency in behavior
          </div>
          <div className="my-4">
            Children with ADHD exhibit ‘constant inconsistency’. Some days, they
            can produce fantastic work autonomously and within the allocated
            time; other days, they struggle to remain on target and may not
            achieve anything even with careful monitoring.
          </div>
          <div className="font-bold font-xl my-4">
            3. &nbsp;&nbsp;Different reactions to consequences
          </div>
          <div className="my-4">
            Children with ADHD react differently to consequences and rewards.
            The first time, they may be pretty excited and driven and may be
            able to focus well on schoolwork. However, the same reward loses its
            worth the second time you use it. The same logic applies to
            consequences as well. A child with ADHD will feel bad and face his
            punishment for a brief period before completely forgetting about it.
          </div>
          <div className="text-2xl font-bold my-4">
            Tips to parent kids with ADHD
          </div>
          <div className="my-4">
            ADHD has a strong influence on a few aspects of parenting. This
            section discusses these aspects as well as some tips for managing
            them.
          </div>
          <div className="font-bold font-xl my-4">
            1. &nbsp;&nbsp;Emotional availability
          </div>
          <div className="my-4">
            When children are dealing with complex and difficult emotions or
            events, they seek their parents for advice and protection. However,
            with ADHD and its inherent emotional dysregulation, it can be
            challenging to remain continuously present and attentive to assist a
            child's emotions.
          </div>
          <div className="my-4">
            Furthermore, maintaining control under stressful situations or
            emotional dysregulation, impulsivity, and powerful emotions are also
            hallmarks of ADHD. Thus, "calm" is difficult to come by in ADHD
            families.{" "}
          </div>
          <div className="my-4">
            Don't be afraid to be open with your child to combat these issues. A
            strong emotional bond between parents and child is essential to
            managing emotional dysregulation in children.{" "}
          </div>
          <div className="my-4">
            You can begin this journey by discussing ADHD with your child.
            Instead of concentrating on their faults, emphasize their excellent
            conduct and their strengths.
          </div>
          <div className="my-4">You can also:</div>
          <div className="">
            • Try to do something fun with your child every day to uplift their
            mood.
          </div>
          <div className="">• Help them make friends.</div>
          <div className="">• Teach them how to cooperate in a group.</div>
          <div className="">
            • Activities they enjoy or excel at, such as music, sports or
            coding.
          </div>
          <div className="font-bold font-xl my-4">
            2. &nbsp;&nbsp;Relationship-building
          </div>
          <img src={Pic3} alt="" className="w-[60%] relative left-[20%]" />
          <div className="my-4">
            The parent-child relationship links any good family dynamic.
            However, many ADHD parents struggle to keep their children engaged
            and interested when spending time with them.{" "}
          </div>
          <div className="my-4">
            To help solve this problem, find a bonding activity that you can
            perform with your child regularly. These events will very certainly
            serve as the backdrop for meaningful discussions.
          </div>
          <div className="font-bold font-xl my-4">
            3. &nbsp;&nbsp;Preparing for difficult situations
          </div>
          <div className="my-4">
            Children with ADHD frequently lack the executive function abilities
            required to perform this high-level analysis, planning, and
            execution. Kids with poor impulse control may also lash out,
            complicating difficult situations. To handle undesirable behaviors
            at this age, it is better to use straightforward, short-term
            consequences.
          </div>
          <div className="my-4">
            Make a list of precise consequences, such as a time out or decreased
            screen time, to have on hand for undesirable actions. Give your
            youngster a warning first, then the penalty.
          </div>
          <div className="font-bold font-xl my-4">
            4. &nbsp;&nbsp;Positive parenting
          </div>
          <div className="my-4">
            Positive parenting aids in the establishment of good conduct. This
            involves praising children immediately and with meaningful
            information. In other words, describe your child's actions and
            highlight the aspects you appreciate.
          </div>
          <div className="my-4">
            An example of what you may say is, "I noticed your truck on the
            carpet. Your brother is now playing with it. It's great to see you
            share."
          </div>
          <div className="my-4">
            You can also compliment your child by praising them for spending
            money wisely, providing receipts, adhering to screen time
            guidelines, etc.{" "}
          </div>
          <div className="text-2xl my-4 font-bold">Final Thoughts</div>
          <div className="my-4">
            The strategies mentioned above are only a few things you can do for
            a child with ADHD. You can also set a limit on screen time and
            enforce them consistently and facilitate organizational skills or
            other skill training solutions. These strategies can help both you
            and your child, thus strengthening the parent-child bond.
          </div>
          <div className="my-4">
            In addition, do not ignore your mental health and well-being. Stress
            can take a toll on you as well. Build your support network of
            family, friends or support groups when you can reach out for help
            and emotional support.{" "}
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

export default TipsADHD;
