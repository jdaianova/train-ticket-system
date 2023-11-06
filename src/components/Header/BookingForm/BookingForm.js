import './BookingForm.css';

export default function BookingForm() {
    return (
        <div className="BookingForm">

            <form className="BookingForm__Form">

                <label className="BookingForm__Form-direction">
                    Направление
                    <div>
                        <input type="text" placeholder="Откуда"></input>
                        <input type="text" placeholder="Куда"></input>
                    </div>
                </label>

                <label className="BookingForm__Form-date">
                    Дата
                    <div>
                        <input type="date"></input>
                        <input type="date"></input>
                    </div>
                </label>

                <div className="BookingForm__Form-btn">
                    <button type="submit">найти билеты</button>
                </div>

            </form>

        </div>
    )
};
