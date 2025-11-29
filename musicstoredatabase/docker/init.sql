
CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,          
    name VARCHAR(255) NOT NULL,             
    instrument_type VARCHAR(100) NOT NULL,  
    brand VARCHAR(100),                     
    price DECIMAL(10,2) NOT NULL,           
    stock_quantity INTEGER DEFAULT 0,       
    description TEXT,                       
    date_added TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,  
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP  
);

CREATE OR REPLACE FUNCTION update_modified_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_products_modtime
BEFORE UPDATE ON products
FOR EACH ROW
EXECUTE FUNCTION update_modified_column();


CREATE INDEX idx_products_name ON products (name);
CREATE INDEX idx_products_brand ON products (brand);
CREATE INDEX idx_products_type ON products (instrument_type);

INSERT INTO products (name, instrument_type, brand, price, stock_quantity, description)
VALUES
('Yamaha F310 Acoustic Guitar', 'Guitar', 'Yamaha', 4200.00, 12,
 'Acoustic guitar suitable for beginners with bright tone.'),

('Stratocaster Electric Guitar', 'Guitar', 'Fender', 35000.00, 10,
 'Classic electric guitar featuring three single-coil pickups.'),

('Les Paul Standard', 'Guitar', 'Gibson', 75000.00, 5,
 'Iconic rock guitar with dual humbucker pickups.'),

('Kawai KDP120 Digital Piano', 'Piano', 'Kawai', 32000.00, 4,
 '88-key digital piano with realistic hammer action.'),

('TD-17KVX Electronic Drum', 'Drums', 'Roland', 55000.00, 3,
 'Professional electronic drum kit with mesh heads.'),

('SM58 Dynamic Microphone', 'Microphone', 'Shure', 3500.00, 20,
 'Industry standard dynamic microphone for vocals.');
