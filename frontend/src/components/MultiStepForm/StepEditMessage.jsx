import React, { useState } from "react";
import { apiRequest } from "../../api/apiClient";

export default function StepEditMessage({
  message,
  setMessage,
  onNext,
  onBack,
  tone,
  occasion,
  messageType
}) {
  const [isRegenerating, setIsRegenerating] = useState(false);

  const handleRegenerateAI = async () => {
    setIsRegenerating(true);
    try {
      console.log("Regenerating message with AI...");

      // TRY REAL API FIRST - Get longer, detailed Gemini messages
      try {
        const response = await apiRequest("/ai/generate-gemini", "POST", {
          occasion,
          tone,
          details: `Create a ${messageType} message for ${occasion} in a ${tone.toLowerCase()} tone.`,
          regenerate: true,
          recipient_name: null, // TODO: Pass from props later
        });
        if (response && response.message && response.message.length > 50) {
          setMessage(response.message);
          console.log("Using real AI message:", response.message.length, "characters");
          return;
        }
      } catch (apiError) {
        console.log("Real AI failed, using detailed local variations:", apiError.message);
      }

      // FALLBACK: LOCAL VARIATIONS WITH LONGER, MORE DETAILED MESSAGES
      const messageVariants = {
        "New Year": {
          "Warm": [
            "Dear friend, as we welcome this sparkling New Year, I'm filled with gratitude for the warmth you've brought into my life. Your friendship has been a constant source of joy and support.\n\nMay this year bring you tangible happiness, professional success, and countless moments that make your heart sing with joy.",
            "As the calendar turns, I want you to know how much your presence means to me. Your unwavering friendship has been my greatest gift these past months.\n\nHere's to new chapters filled with genuine warmth, unexpected joys, and the kind of success that really matters to your soul.",
            "This time of year reminds me of the warmth you've brought into my world. Your friendship has been truly special and transformative.\n\nMay this New Year amplify the light you already bring, bringing you success, love, and the deep contentment you deserve."
          ],
          "Funny": [
            "Happy New Year! May your coffee never be cold, your WiFi always strong, and your parking spots miraculously perfect!\n\nHere's to a year of epic stories, zero 'adulting' crises, and laughing so hard you hurt. You make life more entertaining!",
            "Happy New Year to my comedy partner! May your socks stay paired, your leftovers never spoil, and your dance moves never fail!\n\nHere's to zero boring conversations, maximum fun, and all the things that make life genuinely hilarious with you.",
            "Happy New Year! May your alarms always snooze, your takeout always arrive hot, and your phone battery last all day!\n\nHere's to avoiding all the drama, maximizing the fun, and making this year our most entertaining adventure yet!"
          ],
          "Formal": [
            "I extend my most sincere congratulations for the upcoming New Year. May this chapter bring the success and fulfillment you have worked diligently to achieve.\n\nYour dedication and integrity are truly remarkable. Please accept my warmest wishes for continued excellence and genuine happiness in the year ahead.",
            "As we stand at the threshold of this New Year, I wanted to convey my deepest congratulations. Your accomplishments have been truly impressive.\n\nMay this year bring the professional growth and personal satisfaction you deserve. Sincere congratulations and heartfelt good wishes.",
            "Please accept my formal New Year congratulations. Your commitment to excellence has been truly inspiring.\n\nI wish for you a year filled with meaningful achievements and genuine joy. May you continue to rise and be celebrated for your remarkable qualities."
          ]
        },
        "Birthday": {
          "Warm": [
            "Happy Birthday to someone whose friendship has been my greatest gift! As another year illuminates your amazing journey, I'm filled with gratitude for having you in my life.\n\nMay this birthday year bring you joy that warms your heart, love that fills your soul, and the kind of happiness that truly lights you up!",
            "Happy Birthday to my favorite person in the world! Another year of your incredible life fills me with excitement for what you will accomplish and experience.\n\nMay you be surrounded by love, filled with joy, and celebrated for the amazing human being that you are. You deserve nothing but the best!",
            "Happy Birthday to someone who makes the world brighter! A year of your kindness, laughter, and genuine spirit has touched so many lives.\n\nMay this birthday bring you all the love and happiness you give to others, wrapped in experiences that make your heart truly sing!"
          ],
          "Funny": [
            "Happy Birthday! Another year of your existence means another year of unlimited cake excuses and zero 'adulting' responsibilities!\n\nMay your candles be easily blown out, your presents perfectly wrapped, and your birthday dance moves your most legendary performance yet!",
            "Happy Birthday! Age is just a number, and you're about to prove that numbers can be WAY more awesome than math teachers claim!\n\nMay your birthday cake be enormous, your presents exactly what you wanted, and your celebration the stuff of legendary party stories!",
            "Happy Birthday! You're aging like fine wine – except wine doesn't get better at 'I don't have time for this nonsense' jokes!\n\nMay your birthday be filled with cake instead of calories, presents instead of problems, and friends instead of responsibilities!"
          ],
          "Formal": [
            "Please accept my most sincere congratulations on your birthday. Today marks another milestone in what has clearly been a life filled with remarkable achievements.\n\nYour consistent demonstration of integrity and consideration for others sets an inspiring example. May you continue to achieve great things with the same grace you have shown.",
            "I extend my formal birthday congratulations and warm wishes for the year ahead. This special day represents a celebration of your accomplishments thus far.\n\nYour unwavering commitment to excellence and genuine care for others has made you someone truly remarkable. Please accept these formal good wishes with heartfelt sincerity.",
            "Please accept my formal birthday congratulations. Your dedication to excellence and genuine concern for others has made you an individual worthy of great respect.\n\nMay this birthday year bring you the professional growth and personal satisfaction you deserve. Sincere congratulations and formal good wishes for what promises to be an exceptional year."
          ]
        },
        "Christmas": {
          "Warm": [
            "Warm Christmas wishes to someone whose friendship has been my greatest holiday blessing! As the season unfolds, I'm filled with gratitude for having you in my life.\n\nMay your Christmas be filled with the warmth of loved ones, the peace of precious moments, and the joy that only genuine connections can bring.",
            "Christmas wishes to my favorite holiday companion! The season wouldn't be the same without your infectious joy and wonderful spirit.\n\nMay your Christmas days be filled with warmth that lasts, memories that endure, and love that fills every corner of your heart and home.",
            "Warmest Christmas greetings to someone whose presence makes every holiday magical! Your friendship has been my greatest seasonal gift.\n\nMay this Christmas bring you the kind of warmth that lasts long after the holiday lights are packed away, memories to cherish forever, and genuine peace that fills your soul."
          ],
          "Funny": [
            "Merry Christmas! May your holiday playlist skip NONE of your favorite songs, your wrapping paper be perfectly straight, and your cookie boxes contain mainly cookies!\n\nHere's to avoiding all the family drama, maximizing the cookie intake, and making memories that will have everyone laughing until next Christmas!",
            "Merry Christmas! May Santa bring you exactly what you asked for, NO fruitcake imposters, and enough dental floss for all those extra cookies!\n\nHere's to the perfect balance of holiday magic, zero ugly sweaters, and the kind of family dynamics that make Christmas legends!",
            "Merry Christmas! May your tree lights not be a tangled knot, your stocking not contain mysterious fruit, and your holiday photos be stunning point-free!\n\nHere's to cookie baking without disasters, gift wrapping without frustration, and family gatherings filled with the RIGHT amount of festive chaos!"
          ],
          "Formal": [
            "Season's Greetings and formal Christmas wishes for what promises to be a memorable holiday season. Your accomplishments this past year have been truly noteworthy.\n\nMay this Christmas bring you moments of genuine reflection, heartfelt connections with loved ones, and the kind of peace that comes from living well. Formal congratulations and sincere holiday well-wishes.",
            "Please accept my season's greetings and formal Christmas congratulations. This time of year provides an opportunity to reflect on meaningful achievements.\n\nYour demonstrated commitment to quality and genuine care for others has made the world better. May your Christmas be filled with the recognition and love you deserve. Sincere congratulations and formal holiday wishes.",
            "Season's Greetings and my most formal Christmas congratulations. The holiday season represents an opportunity to celebrate meaningful connections.\n\nYour consistent demonstration of excellence and genuine concern for your fellow humans has created positive impact throughout your community. May this Christmas bring you heartfelt celebrations and genuine joy. Formal congratulations and sincere good wishes."
          ]
        }
      };

      // Get random variant with better randomization
      const variants = messageVariants[occasion]?.[tone] || messageVariants["Birthday"]["Warm"];
      const randomIndex = Math.floor(Math.random() * variants.length * Math.random()); // Double randomization for better variety
      const newMessage = variants[randomIndex % variants.length];

      setMessage(newMessage);
      console.log("Using detailed local variation:", newMessage.length, "characters");

    } catch (error) {
      console.error("Error generating message:", error);
      alert("Failed to generate message. Please try again.");
    } finally {
      setIsRegenerating(false);
    }
  };

  return (
    <div>
      <h3 className="text-2xl font-semibold text-slate-800">Edit Your Message</h3>

      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full border border-blue-200 p-4 rounded-2xl mt-4 shadow-sm bg-white/80 focus:ring-4 focus:ring-[#B8C2FF] outline-none text-lg"
        rows={6}
        placeholder="Edit your AI-generated message here..."
      ></textarea>

      <div className="mt-4 text-sm text-slate-600">
        💡 AI-generated content can be edited freely. Use "Regenerate with AI" for a fresh version.
      </div>

      <div className="flex justify-between mt-6 gap-3">
        <button
          className="px-6 py-3 bg-slate-200 rounded-xl"
          onClick={onBack}
        >
          Back
        </button>

        <div className="flex gap-3">
          <button
            className="px-6 py-3 bg-green-500 text-white rounded-xl shadow-md font-semibold hover:bg-green-600 transition flex items-center gap-2"
            onClick={handleRegenerateAI}
            disabled={isRegenerating}
          >
            {isRegenerating ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                Generating...
              </>
            ) : (
              <>🔄 Regenerate with AI</>
            )}
          </button>

          <button
            className="px-6 py-3 text-white rounded-xl shadow-md font-semibold bg-gradient-to-r from-[#000F3A] via-[#001B5E] to-[#002D89] hover:opacity-90 transition"
            onClick={onNext}
          >
            Next: Choose Template
          </button>
        </div>
      </div>
    </div>
  );
}
