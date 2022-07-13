import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Pic1 from "../images/Toddlers1.png";
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

const SpeechforToddlers = () => {
  const url = window.location.href;
  return (
    <div>
      <Navbar />
      <div className="md:flex md:mx-28 mx-3 md:pt-28 pt-20 mb-16">
        <div className=" md:w-[70%]">
          <div className="md:flex mb-4">
            <div className="text-3xl md:my-4 my-2 font-bold">
              10 most effective speech activities for toddlers
            </div>
            <div className="md:ml-20 relative md:top-6">
              {" "}
              ~ Posted on 23 Jun 2022
            </div>
          </div>
          <img src={Pic1} alt="" className="my-4" />
          <div className="my-4">
            Your child's speech development isn't restricted to a speech
            therapist's office. In reality, speech therapy exercises are best
            carried out at home, where your kid feels at ease. Nothing prevents
            you from encouraging your child to speak, even if you don't yet have
            a speech therapist. Here are some speaking exercises and routines
            that you may undertake at home with your child to encourage them to
            speak.{" "}
          </div>

          <div className="font-bold text-2xl my-4">
            Read a book or a magazine
          </div>
          <div className="my-4">
            Reading aloud to your child will help them expand their vocabulary
            by listening to how you create words. You can encourage them to
            repeat the words from the book after you when they can form words.
            This will gradually improve their articulation and literacy. You can
            eventually leave out certain words and pause so your child may speak
            up and fill in the blanks.
          </div>
          <div className="my-4">
            You don't even have to limit yourself regarding reading resources.
            Some educational and children's periodicals can also provide
            wonderful reading material. Magazines with plenty of photographs are
            ideal for viewing together. This is especially beneficial to entice
            children to interact, point to the photos, and ask, "What's that?"
          </div>
          <div className="font-bold text-2xl my-4">
            Have fun with your youngster
          </div>
          <div className="my-4">
            Playing is an excellent method to interact with your child while
            simultaneously developing motor skills and reaping several other
            advantages. Playing with your youngster also increases confidence
            without putting pressure on him or her to speak. However, you can
            gently encourage speech by allowing your child to direct your
            actions. All you have to do is stay in the background and complete
            what is requested of you.{" "}
          </div>
          <div className="font-bold text-2xl my-4">
            Introduce new words and sounds
          </div>
          <div className="my-4">
            Your toddler's capacity to learn new words increases as they grow.
            Hence, your youngster will not be overwhelmed by remembering them if
            they are introduced gradually.
          </div>
          <div className="my-4">
            This can be accomplished by pointing to or taking up things and
            explaining what they are, such as raising a toy ball and saying
            "ball." "Mommy"/"Daddy" while pointing to yourself works too, so
            they can associate the words with the person.
          </div>
          <div className="my-4">
            You can also assist children in learning new words by adding them to
            previously acquired ones. For example, combining the new word
            "large" with the previously learned term "ball" will assist them in
            connecting the two. To expand your child's vocabulary, use two to
            three versions of the same term ("soft ball," "green ball").
          </div>
          <div className="font-bold text-2xl my-4">
            Tell your child what you're doing
          </div>
          <div className="my-4">
            Continue to talk about what you're doing when feeding, bathing, or
            changing your child. If you're heading out, you can also tell them
            where you're going in simple terms. Keep doing this, and you will
            surely be shocked by how much information your child can remember.{" "}
          </div>
          <div className="font-bold text-2xl my-4">
            Teach them to ask for what they want
          </div>
          <div className="my-4">
            Children learn to ask for things and make decisions, whether it's a
            shirt or a dress in the morning or the option between eggs or
            pancakes. This activity can also be beneficial in your child's
            neurodevelopment. Therefore, start teaching them to ask for what
            they want, whether it's food or toys, by letting you know what they
            desire. Putting objects out of reach is one technique to get your
            youngster to start communicating. For example, you can place their
            toys on a shelf and their meals on an out-of-reach counter. This
            will lead them to seek your assistance.
          </div>
          <div className="font-bold text-2xl my-4">Rhyming and singing</div>
          <div className="">
            Sing nursery rhymes and children's music with your youngster. It is
            essential to your speech treatment efforts because rhythm and
            rhyming words stimulate communication. It also helps you spend more
            time with your youngster, and you both have fun while learning!
          </div>
          <div className="font-bold text-2xl my-4">
            Repetition and Expansion
          </div>
          <div className="">
            We have already explored how to introduce new words by connecting
            them to previously taught ones. You may also use a similar strategy,
            repetition, to help your child learn new words.
          </div>
          <div className="my-4">
            For example, if your toddler exclaims, "Cat run!" you may respond,
            "Yes, the cat is running." He's moving really quickly." However, you
            must remember to keep the expansion sentences as accurate as
            possible.{" "}
          </div>
          <div className="font-bold text-2xl my-4">
            Teach "thank you" and "please" from an early age
          </div>
          <div className="my-4">
            Children learn to be courteous from their parents. Thus, when
            conversing with them and other family members, use the phrases like
            please and thank you. Soon, these words will become second nature to
            your youngster. This practice will also help your youngster grow
            into a well-mannered adult in the future.
          </div>
          <div className="font-bold text-2xl my-4">
            TV does NOT encourage youngsters to speak
          </div>
          <div className="my-4">
            Contrary to popular belief, television is not included in speech
            therapy sessions. In fact, contact with other individuals is
            essential for language development. Thus, You must turn off the TV
            as soon as you arrive home and keep it off when your child is in the
            room.{" "}
          </div>
          <div className="font-bold text-2xl ">
            Make use of hand gestures and sign language
          </div>
          <div className="my-4">
            Children should begin employing gestures at the age of 8 to 9
            months. Teaching children gestures or signs will not result in a
            language delay, especially if they are linked to spoken words. In
            fact, it is a great technique for late communicators to begin
            communicating.
          </div>
          <div className="my-4">
            Start by waving and saying 'hi' and 'goodbye.' You may also make
            motions for activities that your youngster enjoys. You can take this
            a step further by teaching your child sign language. Concentrate on
            simple and utilitarian phrases such as more, help, please, thank
            you, and even Mom or Dad. Consider which signals would be most
            beneficial to your youngster.
          </div>
          <div className="my-4">
            Functional signs will inspire your youngster to utilize them on a
            regular basis. They can begin using it to request goods such as
            milk, blankets, or even their favorite toys.
          </div>
          <div className="font-bold text-2xl my-4">Summing It Up</div>
          <div className="my-4">
            It does not have to be difficult to assist your child in developing
            words and language. In fact, there are several opportunities for
            teachable and instructional moments throughout the day. All you have
            to do is seize them!
          </div>
          <div className="my-4">
            However, if your youngster is becoming dissatisfied with the methods
            listed above, you should either make the skill simpler or reduce the
            duration. All in all, you want your youngster to enjoy working on
            their speech, not struggle with it.{" "}
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

export default SpeechforToddlers;
