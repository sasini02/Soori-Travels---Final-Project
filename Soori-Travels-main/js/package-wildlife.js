// Get references to the <a> tags and the content container
const itineraryLink = document.getElementById('itinerary-link');
const attractionsLink = document.getElementById('attractions-link');
const tourmapLink = document.getElementById('tourmap-link');
const fineprintLink = document.getElementById('fineprint-link');
const contentContainer = document.getElementById('content-container');

// Add click event listeners to the <a> tags
itineraryLink.addEventListener('click', loadItinerary);
attractionsLink.addEventListener('click', loadAttractions);
tourmapLink.addEventListener('click', loadTourMap);
fineprintLink.addEventListener('click', loadFinePrint);

// Define the functions to load specific content
function loadItinerary(event) {
    event.preventDefault(); // Prevent the default link behavior

    // Clear the content container
    contentContainer.innerHTML = `        <h2 style="text-align: center; font-size: 5rem; color: #fff; margin-top: 5rem;" data-aos="fade-up" data-aos-delay="150" >ITINERARY</h2>
  <div id="itinerary">
<div class="box-container">
    <div class="box" data-aos="fade-up" data-aos-delay="150">
        <div class="image">
            <img src="../images/wild-life-day-1.jpg" alt="">
        </div>
        <div class="content">
            <!-- <h3>WILDLIFE PARADISE</h3> -->
            <h3>Overnight Stay at Goldi Sands Hotel, Negombo</h3>
            <h5>DAY 01</h5>
            <p>
                On arrival at the Bandaranaike International Airport, you will be met by our Soori Travels
                representative and transfer to Negombo before spending the evening at leisure by the beautiful
                beach</p>

            <a><i class="fas fa-angle-right"></i> Standard Room </a> <br>
            <a><i class="fas fa-angle-right"></i> Private balcony</a> <br>
            <a><i class="fas fa-angle-right"></i> Piped music</a>

        </div>
    </div>

    <div class="box" data-aos="fade-up" data-aos-delay="150">
        <div class="image">
            <img src="../images/wild-life-day-2.jpg" alt="">
        </div>
        <div class="content">
            <h3>Overnight Stay at Sorowwa Resort & Spa, Habarana</h3>
            <h5>DAY 02</h5>
            <p>After breakfast depart to Habarana. Where you can spend the day at leisure, exploring the grounds
                of the hotel or the nearby town before preparing for an exciting day of new cultural
                experiences.</p>
            <a><i class="fas fa-angle-right"></i> Deluxe Room </a> <br>
            <a><i class="fas fa-angle-right"></i> King-size bed</a> <br>
            <a><i class="fas fa-angle-right"></i> Satellite TV</a>
        </div>
    </div>

    <div class="box" data-aos="fade-up" data-aos-delay="150">
        <div class="image">
            <img src="../images/wild-life-day-3.jpg" alt="">
        </div>
        <div class="content">
            <h3>Overnight Stay at Sorowwa Resort & Spa, Habarana</h3>
            <h5>DAY 03</h5>
            <p>After an early breakfast visit the Sigiriya Rock Fortress . Spend the evening taking a Jeep
                safari at Minneriya. The tank just outside your hotel a relaxing way to spend your day with a a
                bird watching tour.</p>
            <a><i class="fas fa-angle-right"></i> Deluxe Room </a> <br>
            <a><i class="fas fa-angle-right"></i> King-size bed</a> <br>
            <a><i class="fas fa-angle-right"></i> Satellite TV</a>
        </div>
    </div>

    <div class="box" data-aos="fade-up" data-aos-delay="150">
        <div class="image">
            <img src="../images/wild-life-day-4.jpg" alt="">
        </div>
        <div class="content">
            <!-- <h3>WILDLIFE PARADISE</h3> -->
            <h3>Overnight Stay at Earl’s Regent, Kandy</h3>
            <h5>DAY 04</h5>
            <p>
                After breakfast, set off on your journey to the Last Kingdom of Sri Lanka – Kandy. En route
                visit the Dambulla Rock Cave Temple. A UNESCO world heritage site that dates back to the 1st
                century BC. Once in Kandy witness a cultural show and visit the Temple of the Tooth Relic.</p>

            <a><i class="fas fa-angle-right"></i> Superior Room </a> <br>
            <a><i class="fas fa-angle-right"></i> Air Conditioning</a> <br>
            <a><i class="fas fa-angle-right"></i> Free - Wifi</a>

        </div>
    </div>

    <div class="box" data-aos="fade-up" data-aos-delay="150">
        <div class="image">
            <img src="../images/wild-life-day-5.jpg" alt="">
        </div>
        <div class="content">
            <h3>Overnight Stay at Heaven Seven Hotel, Nuwara Eliya</h3>
            <h5>DAY 05</h5>
            <p>After an early breakfast visit Udawatta Kele Forest Reserve for a few hours of bird watching.
                Exciting for who want to spend the day surrounded by nature. Then
                proceed to Nuwara Eliya, climbing up to the central highlands and taking a short walk in
                Victoria Park.</p>
            <a><i class="fas fa-angle-right"></i> Deluxe Room </a> <br>
            <a><i class="fas fa-angle-right"></i> Room Service</a> <br>
            <a><i class="fas fa-angle-right"></i> A view of Nuwara Eliya from the balcony</a>
        </div>
    </div>

    <div class="box" data-aos="fade-up" data-aos-delay="150">
        <div class="image">
            <img src="../images/wild-life-day-6.jpg" alt="">
        </div>
        <div class="content">
            <h3>Overnight Stay at Kithala Resort, Tissamaharama</h3>
            <h5>DAY 06</h5>
            <p>Leave very early in the morning to Horton Plains for a morning of
                great birding. Take in the beautiful sites of the surrounding landscapes and after lunch visit
                Yala National Park</p>
            <a><i class="fas fa-angle-right"></i> Deluxe Room </a> <br>
            <a><i class="fas fa-angle-right"></i> Satellite TV</a> <br>
            <a><i class="fas fa-angle-right"></i> Ocean view balcony</a>
        </div>
    </div>
    <div class="box" data-aos="fade-up" data-aos-delay="150">
        <div class="image">
            <img src="../images/wild-life-day-7.jpg" alt="">
        </div>
        <div class="content">
            <!-- <h3>WILDLIFE PARADISE</h3> -->
            <h3>Overnight Stay at Silan Mo Hotel, Mirissa</h3>
            <h5>DAY 07</h5>
            <p>
                Early morning, enjoy a game drive at the Yala National Park. Experience the majestic creatures
                of the wild in their natural habitat. An exciting experience that is not to be missed. In the
                afternoon proceed to Mirissa.</p>

            <a><i class="fas fa-angle-right"></i> Deluxe Room </a> <br>
            <a><i class="fas fa-angle-right"></i> King size bed</a> <br>
            <a><i class="fas fa-angle-right"></i> Free - Wifi</a>

        </div>
    </div>

    <div class="box" data-aos="fade-up" data-aos-delay="150">
        <div class="image">
            <img src="../images/wild-life-day-8.jpg" alt="">
        </div>
        <div class="content">
            <h3>Final Day</h3>
            <h5>DAY 08</h5>
            <p>Leave for an early morning whale watching excursion. This is a must do for those visiting the
                country as Sri Lanka is considered one of the best locations in the world for Whale and Dolphin
                watching. Thereafter proceed to the Airport in time for the connecting flight..</p>
        </div>
    </div>
</div>
</div>`;

    //   // Create and append the specific content
    //   const itineraryContent = document.createElement('p');
    //   itineraryContent.textContent = 'This is the itinerary content.';
    //   contentContainer.appendChild(itineraryContent);
}

function loadAttractions(event) {
    event.preventDefault(); // Prevent the default link behavior

    // Clear the content container
    contentContainer.innerHTML = `<h2 style="text-align: center; font-size: 5rem; color: #fff; margin-top: 5rem;" data-aos="fade-up" data-aos-delay="150">ATTRACTIONS</h2>
  <div class="box-container">
      
      <div class="box" data-aos="fade-up" data-aos-delay="150">
          <div class="image">
              <img src="../images/wild-life-day-1.jpg" alt="">
          </div>
          <div class="content">

              <h3 style="font-size: 3rem; color: #F9A603;">NEGOMBO</h3>
              <!-- <h5>NEGOMBO</h5> -->
              <p style="text-align: center; font-size: 1rem;">
                  Within 20 minutes by car from the airport, on the west coast of Sri Lanka some 35km north of
                  Colombo, the former fishing village of Negombo is now a hot spot for tourists. Negombo has a
                  vibrant after-beach night life with a slew of bars and restaurants. The beach itself is
                  shared with fishermen and one of the most photographed scenes is of the fishing boats red
                  sails in the sunset.

                  There is plenty of beach action too, such as kite surfing, whale watching and boat rides.
                  There several dive stations and Negombo is a popular destination for windsurfing
                  competitions. Negombo has many resorts and holiday inns that are up to the mark for those
                  who wish to stay for some time. These places will give you easy access to enjoy all the
                  activities and some even have packages to offer.</p>

          </div>
      </div>

      <div class="box" data-aos="fade-up" data-aos-delay="150">
          <div class="image">
              <img src="../images/wild-life-day-3.jpg" alt="">
          </div>
          <div class="content">

              <h3 style="font-size: 3rem; color: #F9A603;">SIGIRIYA</h3>
              <p style="text-align: center; font-size: 1rem;">
                  Called by many names including “The Lion Rock” for its initial name of “Sinhagiri”, Sigiriya
                  is near the town of Dambulla and is a colossal column of rock nearly 200m high. It was a
                  royal citadel for 18 years (477-495) when it was fortified by King Kasyapa. The
                  architectural and irrigational technologies of Sigiriya, such as the Water Gardens, still
                  baffle engineers. The climb up steep steps of metal with railings passes a wall decorated
                  with frescoes of bare-breasted women. Art experts consider them unique.

                  The summit of the rock is a hectare in area and the outer wall of the palace was constructed
                  on the brink of the rock with gardens and ponds softening the harshness of the eerie. Since
                  it was constructed over 1,500 years ago, it is claimed by enthusiast as the Eighth Wonder of
                  the World and is anyway a World Heritage Site</p>


          </div>
      </div>

      <div class="box" data-aos="fade-up" data-aos-delay="150">
          <div class="image">
              <img src="../images/minneria-national-park.jpg" alt="">
          </div>
          <div class="content">

              <h3 style="font-size: 3rem; color: #F9A603;">NATIONAL PARK MINNERIYA </h3>
              <p style="text-align: center; font-size: 1rem;">
                  Minneriya National Park. Minneriya is a good
                  alternative to the busier parks in the south and it's easy to weave in a day here between
                  visiting the ancient cities. The dry season, preferably from June to September, is the best
                  time to visit the 8,890 hectare park when the ancient tank, dries out and the grasses and
                  shoots push through. During this time it is possible to
                  see herds of up to 150 elephants feeding and washing, as well as toque macaques, sambar deer
                  and leopards. The hungry bird flocks include cormorants and painted storks. Minneriya,
                  closest by car to the ancient city Polonnaruwa, was upgraded from a nature reserve to a
                  national park because of the increased number of tourists coming to see the elephants.</p>

          </div>
      </div>

      <div class="box" data-aos="fade-up" data-aos-delay="150">
          <div class="image">
              <img src="../images/dambulla-rock-temple.jpg" alt="">
          </div>
          <div class="content">

              <h3 style="font-size: 3rem; color: #F9A603;">DAMBULLA ROCK TEMPLE </h3>
              <p style="text-align: center; font-size: 1rem;">
                  The Dambulla temple has five caves and 157 statues of the Lord Buddha, many paintings on the
                  ceilings and walls that emphasis the artistic talent of ancient days. The history of the
                  caves, rock and temple dates from the first century B.C. The fascination of these caves is
                  not only the statues but also the many intricate and delicate paintings that cover the
                  ceiling and walls, created with indigenous traditional paints.

                  Because of the history, archaeological and artistic implications, the premises were declared
                  as one of the UNESCO World Heritage sites in 1991. The temple has been in use for over 22
                  centuries and still holds a sense of benevolence and spirituality. Visitors may climb up
                  steps to the temple and the view from the top of the rock is as inspiring as the temple’s
                  golden interior.</p>

          </div>
      </div>

      <div class="box" data-aos="fade-up" data-aos-delay="150">
          <div class="image">
              <img src="../images/kandy.jpg" alt="">
          </div>
          <div class="content">

              <h3 style="font-size: 3rem; color: #F9A603;">KANDY</h3>
              <p style="text-align: center; font-size: 1rem;">
                  The ancient kingdom of Kandy is home to the Temple of the Tooth Relic of Lord Buddha as well
                  as Edwardian buildings, a king-made lake, a nature reserve and exciting shops.
                  As the second largest city of the island and the capital of the Central Province, Kandy has
                  grown from being a medieval kingdom to a friendly, busy city set in forested hills and
                  surrounded by tea plantations and close to the Royal Botanical Gardens at Peradeniya. As
                  well as the Temple of the Tooth, there are many Buddhist monasteries and Hindu places of
                  worship to visit, and cultural dance performances to watch.
                  Kandy is a convenient base to stay for a few days while exploring the Cultural Triangle as
                  there are comfortable hotels to suit every budget. The city is easily accessible from
                  Colombo by rail, road and float plane</p>

          </div>
      </div>

      <div class="box" data-aos="fade-up" data-aos-delay="150">
          <div class="image">
              <img src="../images/temple-toothrelic.jpg" alt="">
          </div>
          <div class="content">

              <h3 style="font-size: 3rem; color: #F9A603;">TEMPLE OF THE TOOTH RELIC</h3>
              <p style="text-align: center; font-size: 1rem;">
                  The golden canopy of the medieval Temple of the Tooth is a landmark dominating the ancient
                  kingdom, now modern city, of Kandy

                  The Sacred Relic of Buddha’s tooth was brought from India in the 4th century before being
                  housed in a specially created temple in Kandy in the 16th century. The moat and octagonal
                  structure were added later. The tooth relic is enclosed in seven golden caskets enriched
                  with gemstones, in the shape of a Stupa, within the depths of the temple. The temple is open
                  to visitors.</p>

          </div>
      </div>

      <div class="box" data-aos="fade-up" data-aos-delay="150">
          <div class="image">
              <img src="../images/wild-life-day-6.jpg" alt="">
          </div>
          <div class="content">

              <h3 style="font-size: 3rem; color: #F9A603;">HORTON PLAINS</h3>

              <p style="text-align: center; font-size: 1rem;">
                  Officially declared a National Park in 1988, Horton Plains in the hill country 32km by road
                  from Nuwara Eliya, stretches 3,000ha across the highlands to plunge at World’s End. The Park
                  receives rainfall from both northeast and southwest monsoons as well as inter-monsoonal
                  rains; three main rivers namely Kelani, Walawe and Mahaweli, the longest river of the
                  country, begin in this area.

                  The plains are popular for trekking and rich in biodiversity with much of the flora and
                  fauna found in the Park being endemic and only found there. Forests are dominated by a range
                  of giant tree ferns and the Park is also famous for flowers and there is wild life aplenty
                  such as leopard, sambhur and wild boar. Though this is a cold highland plateau the bird
                  diversity is very high.</p>

          </div>
      </div>

      <div class="box" data-aos="fade-up" data-aos-delay="150">
          <div class="image">
              <img src="../images/wild-life-day-2.jpg" alt="">
          </div>
          <div class="content">

              <h3 style="font-size: 3rem; color: #F9A603;">YALA NATIONAL PARK</h3>
              <p style="text-align: center; font-size: 1rem;">
                  Yala National Park is also known as the Ruhunu National Park and is one of the biggest
                  jungles in the country. Set in the southeast of Sri Lanka, it is a 305 km drive from
                  Colombo. Elephants are the Park’s main attraction although leopards are seen frequently and
                  sloth the bear occasionally. Yala is also home to hundred species of birds, endemic and
                  foreign, including the jungle fowl, Sri Lanka’s national bird, and flocks of peacocks. Yala
                  also has a beach front and swamps haunted by crocodiles.

                  As one of the first National Parks established in Sri Lanka (in 1938), Yala is an
                  established place for tourists to visit and stay as it has plenty of accommodation near its
                  gates, both luxurious and budget and even camping; morning and evening safaris by jeep can
                  be arranged easily.</p>


          </div>
      </div>

      <div class="box" data-aos="fade-up" data-aos-delay="150">
          <div class="image">
              <img src="../images/wild-life-day-7.jpg" alt="">
          </div>
          <div class="content">

              <h3 style="font-size: 3rem; color: #F9A603;">MIRISSA</h3>

              <p style="text-align: center; font-size: 1rem;">
                  Mirissa’s harbour is known as the best place to charter a boat for whale and dolphin
                  watching from November to April. The tourist settlement on the coast at Mirissa has sprung
                  up in response to backpackers flocking there to enjoy hours of paragliding, body boarding
                  and sea kayaking as well as snorkelling and diving. For surfing, the seas are ideal during
                  the months of September to April.

                  The beach at Mirissa is popular with budget and mainstream tourists although upmarket
                  properties are opening close by. It lies off the south coast road at 150km from Colombo and
                  can be reached quickly via the new Southern Expressway from Colombo to Matara. The best
                  beach cove stretches east of the headland that separates Mirissa from Weligama Bay and is
                  lined with sunbeds and restaurants in thatched shacks.</p>

          </div>
      </div>
  </div>
</div>`;

    // Create and append the specific content
    //   const attractionsContent = document.createElement('p');
    //   attractionsContent.textContent = 'These are the attractions.';
    //   contentContainer.appendChild(attractionsContent);
}

function loadTourMap(event) {
    event.preventDefault(); // Prevent the default link behavior

    // Clear the content container
    contentContainer.innerHTML = `<div style="margin-left: 32rem;"  data-aos="fade-up" data-aos-delay="150">
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m76!1m12!1m3!1d2025724.0981534556!2d80.825261023168!3d7.4106284869918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m61!3e0!4m5!1s0x3ae2ee9c6bb2f73b%3A0xa51626e908186f3e!2sNegombo!3m2!1d7.2007968!2d79.8736754!4m5!1s0x3afc9f634c1cda45%3A0x1a60ee3d675e4542!2sHabarana%20junction%20Bus%20Stop%20(%20Trincomalee%20%2FMuthur%2FPulmude)%2C%20Habarana!3m2!1d8.0406236!2d80.7557879!4m5!1s0x3afb6009a20be05d%3A0xa4d046f2f06b05f5!2sMinneriya%20National%20Park!3m2!1d8.0156443!2d80.84467029999999!4m5!1s0x3afca0dfa73179d1%3A0x1e04c1150cff0edf!2sSigiriya!3m2!1d7.954108499999999!2d80.75469799999999!4m5!1s0x3ae366266498acd3%3A0x411a3818a1e03c35!2sKandy!3m2!1d7.2905714999999995!2d80.6337262!4m5!1s0x3ae380353424cfd5%3A0x27513dd3ea566731!2sNuwaraeliya!3m2!1d6.9872935!2d80.7671656!4m5!1s0x3ae3882edb4b78ef%3A0xcebca89153777249!2sHortan%20Plains%20National%20Park!3m2!1d6.809445999999999!2d80.8023333!4m5!1s0x3ae69c593fea2687%3A0x2ab257d448dcb311!2sYaala%20Safari%20(Safari%20Jeep%20Service)%2C%20Main%20Street%2C%20Tissamaharama!3m2!1d6.2778462!2d81.2918758!4m5!1s0x3ae13fd4c636d5ff%3A0xb81456b9b41a93b2!2sMirissa%20Beach%2C%20Mirissa!3m2!1d5.9447028!2d80.45916079999999!4m5!1s0x3ae25914c18602d7%3A0xc6a8f4d884aa516!2sBASICO%20Bar%20Lounge%2C%20Union%20Place%2C%20Colombo!3m2!1d6.9209239!2d79.85629109999999!5e0!3m2!1sen!2slk!4v1687470334218!5m2!1sen!2slk"
        width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe></div>`;

    // Create and append the specific content
    // const tourMapContent = document.createElement('p');
    // tourMapContent.textContent = 'This is the tour map.';
    // contentContainer.appendChild(tourMapContent);
}

function loadFinePrint(event) {
    event.preventDefault(); // Prevent the default link behavior

    // Clear the content container
    contentContainer.innerHTML = `<div class="form" data-aos="fade-up" data-aos-delay="50">
    <form action="">
        <div class="price" >
            <h3>Price</h3><br>
            <span> <i class="fas fa-angle-right" style="color: #F9A603; text-align: center;"></i><i
                    class="fas fa-angle-right" style="color: #F9A603; text-align: center;"></i> 600USD <i
                    class="fas fa-angle-left" style="color: #F9A603;"></i><i class="fas fa-angle-left"
                    style="color: #F9A603;"></i></span>
        </div>
        <br><br>
        <hr style="border: none; height: 1px; margin-left: 10%; width: 80%; background-color: #F9A603;">
        <br><br>
        <div class="price" >
            <h3>Inclusions & Exclusions</h3><br>
            <span style="margin-left: 5%;">The above cost includes:</span><br>

            <p> <i class="fas fa-angle-right" style="color: #F9A603;"></i> 12 nights’ accommodation. 06 nights on
                bed & breakfast while at Negombo, Habarana, Kandy, Hikkaduwa and 02 nights on half board while at
                Sinharaja and 04 nights on full board basis while at Wilpattu, Yala.</p>

            <p><i class="fas fa-angle-right" style="color: #F9A603;"></i>Transport in an Air-Conditioned car with
                an accompanying English speaking Chauffeur Guide.</p>

            <p><i class="fas fa-angle-right" style="color: #F9A603;"></i>Government Tax (11%).</p><br>

            <span style="margin-left: 5%;">The above cost does not include:</span><br>

            <p> <i class="fas fa-angle-right" style="color: #F9A603;"></i> Early check-in & Late check-out.</p>

            <p><i class="fas fa-angle-right" style="color: #F9A603;"></i>Entrance/excursion fees to the places
                mentioned in our itinerary.</p>

            <p><i class="fas fa-angle-right" style="color: #F9A603;"></i>Tips and other expenses of a personal
                nature.</p>

            <p style="margin-left: 10%; color: gainsboro;">*** Availability at hotels is subject to confirmation of
                the tour and travel dates ***</p>
        </div>
        <br><br>
        <hr style="border: none; height: 1px; margin-left: 10%; width: 80%; background-color: #F9A603;">
        <br><br>
        <div class="price">
            <h3>Payment Policy</h3>
            <p> <i class="fas fa-angle-right" style="color: #F9A603;"></i> Please note we require 50% of the payment
                on confirmation and the balance 2 weeks prior to arrival or the full payment can be settled on
                confirmation.</p>
        </div>
        <br><br>
        <hr style="border: none; height: 1px; margin-left: 10%; width: 80%; background-color: #F9A603;">
        <br><br>
        <div class="price" >
            <h3>Payment Methods</h3>
            <p> <i class="fas fa-angle-right" style="color: #F9A603;"></i> On-line payment using a personal credit
                card
                (Amex/Visa/Master). Booking details will be sent on confirmation.</p>
                <p> <i class="fas fa-angle-right" style="color: #F9A603;"></i> Bank transfer.</p>
        </div>




    </form>
    
</div>`;


    contentContainer.appendChild(finePrintContent);
}