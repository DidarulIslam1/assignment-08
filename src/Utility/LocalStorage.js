
const getDonateCategory = () => {
    const storedDonateCategory = localStorage.getItem('donate-category');
    if (storedDonateCategory) {
        return JSON.parse(storedDonateCategory)
    }
    return [];
}

const saveDonateCategory = id => {
    const storedDonateCategories = getDonateCategory();
    const isExist = storedDonateCategories.find(donateId => donateId === id);
    if (!isExist) {
        storedDonateCategories.push(id);
        localStorage.setItem('donate-category', JSON.stringify(storedDonateCategories));
    }
}

export { getDonateCategory, saveDonateCategory }