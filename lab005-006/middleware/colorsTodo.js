const hexColorMapping={
    red: '#FF0000',   
    green: '#00FF00',
    blue: '#0000FF'
};

export const hexColorMiddleware = (req, res, next) => {
    const color = req.query.color;

    if (color && hexColorMapping[color.toLowerCase()]) {
        req.hexColor = hexColorMapping[color.toLowerCase()];
    }
    
    next();
};      
