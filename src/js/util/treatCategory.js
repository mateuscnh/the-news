function category(category) {
    switch (category) {
        case 'NEGÓCIOS':
            return category = 'business';
        case 'ENTRETENIMENTO':
            return category = 'entertainment';
        case 'SAÚDE':
            return category = 'health';
        case 'CIÊNCIAS':
            return category = 'science';
        case 'ESPORTES':
            return category = 'sports';
        case 'TECNOLOGIA':
            return category = 'technology';
    }
}

export default category;
