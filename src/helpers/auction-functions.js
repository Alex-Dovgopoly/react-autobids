export const calculateLeftTime = (UNIX_timestamp) => {
    let response = '';

    const currentDate = new Date();
    const endDate = new Date(UNIX_timestamp.seconds * 1000);
    const leftDate = new Date(endDate - currentDate);

    let month = leftDate.getUTCMonth();
    let date = leftDate.getUTCDate();
    let hour = leftDate.getUTCHours();
    let min = addZero(leftDate.getUTCMinutes());
    let sec = addZero(leftDate.getUTCSeconds());

    if (month > 2) {
        return 'Sold';
    }

    if (date > 7) {
        return 'Start soon';
    }

    response = date + ' days';

    if (date === 1) {
        response = hour + ':' + min + ':' + sec;
    }

    return response;
}

function addZero(i) {
    if (i < 10) {
        i = "0" + i
    }
    return i;
}

export const getEndDateAuction = (UNIX_timestamp) => {
    let days = 7;
    const startDate = new Date(UNIX_timestamp);
    let endDateUnicode = startDate.setTime(startDate.getTime() + (days * 24 * 60 * 60 * 1000));
    let endDate = new Date(endDateUnicode);

    return endDate;
}

export const doSortAuctionsList = (auctionsArr, sortType) => {

    switch (sortType) {
        case 'highest_price':
            return auctionsArr.sort(function (x, y) {
                return y.current_price - x.current_price;
            });
        case 'lowest_price':
            return auctionsArr.sort(function (x, y) {
                return x.current_price - y.current_price;
            });

        case 'highest_mileage':
            return auctionsArr.sort(function (x, y) {
                return y.spec.mileage - x.spec.mileage;
            });
        case 'lowest_mileage':
            return auctionsArr.sort(function (x, y) {
                return x.spec.mileage - y.spec.mileage;
            });

        default:
            return auctionsArr.sort(function (x, y) {
                return x.end_date - y.end_date;
            });
    }
}