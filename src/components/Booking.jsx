import { BookingSec } from "./style";

const Booking = () => {
  return (
    <BookingSec>
      <div className="top"></div>
      <div className="bottom"></div>
      <div className="form-cont">
        <div className="title">
          <h1>Book A Table</h1>
          <p>
            We consider all the drivers of change gives you the components you
            need to change to create a truly happens.
          </p>
        </div>

        <form>
          <div class="row">
            <div class="input-group">
              <label>Date</label>
              <div class="input-box">
                <input type="date" />
                {/* <span>
                  {" "}
                  <CiCalendar />{" "}
                </span> */}
              </div>
            </div>

            <div class="input-group">
              <label>Time</label>
              <div class="input-box">
                <select>
                  <option>06:30 PM</option>
                  <option>07:00 PM</option>
                  <option>07:30 PM</option>
                  <option>08:00 PM</option>
                </select>
                {/* <span>
                  <FaChevronDown />{" "}
                </span> */}
              </div>
            </div>
          </div>

          <div class="row">
            <div class="input-group">
              <label>Name</label>
              <input
                className="input"
                type="text"
                placeholder="Enter your name"
              />
            </div>

            <div class="input-group">
              <label>Phone</label>
              <input
                className="input"
                type="tel"
                placeholder="x-xxx-xxx-xxxx"
              />
            </div>
          </div>

          <div class="input-group">
            <label>Total Person</label>

            <div class="input-box">
              <select>
                <option>1 Person</option>
                <option>2 People</option>
                <option>3 People</option>
                <option>4 People</option>
                <option>5+ People</option>
              </select>

              {/* <FaChevronDown /> */}
            </div>
          </div>

          <button type="submit">Book A Table</button>
        </form>
      </div>
    </BookingSec>
  );
};

export default Booking;
