import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from 'next/image';
import { Card } from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Ina Loso",
    position: "Head of Data Analytics Credit Portfolio & Sector Analysis @ Swedbank",
    text: `A quick learner who finds ways to improve the team's work - this is what comes to my mind when I think about Isak. I had the pleasure of working with Isak for almost a year, during which I was his direct manager.\n\nI was particularly impressed by how quickly Isak learnt all new work tools, processes and complex concepts when he joined the team, and how he continuously suggested ways to improve the team's work, for example by introducing automation tools such as Power Automate.\n\nAnother trait that makes Isak stand out is that he is calm and pedagogical, something he has been praised for several times by different colleagues. Isak earns my highest recommendations, and I'm confident that he will be an asset to any team or employer!`,
    avatar: memojiAvatar1,
  },
  {
    name: "Vickie Lindsay",
    position: "Head of Central Risk Infrastructure @ Siemens Financial Services",
    text: `I had the pleasure of being Isak's Line Manager whilst he worked in my team. Isak was great to have in the team, he was curious, smart, delivered results on time and regularly delivered more than expected.\n\nIsak was working in an international environment and built great relationships with colleagues across multiple countries with strong feedback received from them.\n\nI particularly appreciated Isaks approach which was to get involved in as many topics as he could to learn and develop whilst inspiring others to do the same.`,
    avatar: memojiAvatar2,
  },
  // {
  //   name: "Veronica Xanthalopus Moitus",
  //   position: "Data Analyst @ Swedbank",
  //   text: `Coming soon...`,
  //   avatar: memojiAvatar3,
  // },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Positive Feedback"
          title="Feedback From Those I’ve Worked With"
          description="Don't take my word for it. See what managers and co-workers have to say about my work."
        />
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {testimonials.map(testimonial => (
                  <Card
                    key={testimonial.name}
                    className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-full h-full object-contain rounded-full"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-white/40">{testimonial.position}</div>
                      </div>
                    </div>
                    {/* Ändringen sker här: ersätter <p> med en <div> och loopar över stycken */}
                    <div className="mt-4 md:mt-6 text-sm md:text-base space-y-3">
                      {testimonial.text.split('\n\n').map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                      ))}
                    </div>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
