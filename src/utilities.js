/**
 * Clamps num to be between min and max, inclusive
 * @param {Number} num 
 * @param {Number} min 
 * @param {Number} max 
 */
export function clamp(num, min, max) {
    return Math.min(Math.max(num, min), max);
}

export function createDateSpanString(startDate, endDate) {
    if (!endDate) {
        return `${startDate} - present`;
    }
    
    if (startDate === endDate) {
        return startDate.toString();
    }

    return `${startDate} - ${endDate}`;
}

export function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = "__storage_test__";
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    } catch (e) {
        return (
            e instanceof DOMException &&
            // everything except Firefox
            (e.code === 22 ||
                // Firefox
                e.code === 1014 ||
                // test name field too, because code might not be present
                // everything except Firefox
                e.name === "QuotaExceededError" ||
                // Firefox
                e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage &&
            storage.length !== 0
        );
    }
}
  
