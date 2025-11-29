-- สร้างตาราง products (เครื่องดนตรี)
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    brand VARCHAR(255),
    category VARCHAR(100),
    description TEXT,
    price DECIMAL(10,2),
    count_in_stock INTEGER DEFAULT 0,
    image_url VARCHAR(500),
    specs JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- สร้าง function สำหรับอัพเดท updated_at โดยอัตโนมัติ
CREATE OR REPLACE FUNCTION update_modified_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- สร้าง trigger เพื่อเรียกใช้ function update_modified_column
CREATE TRIGGER update_products_modtime
BEFORE UPDATE ON products
FOR EACH ROW
EXECUTE FUNCTION update_modified_column();

-- สร้าง index เพื่อเพิ่มประสิทธิภาพการค้นหา
CREATE INDEX idx_products_name ON products(name);
CREATE INDEX idx_products_category ON products(category);
CREATE INDEX idx_products_brand ON products(brand);

-- เพิ่มข้อมูลเครื่องดนตรีตัวอย่าง
INSERT INTO products (name, brand, category, description, price, count_in_stock, image_url, specs) VALUES
    ('Stratocaster Electric Guitar', 'Fender', 'Guitar', 'Classic electric guitar with versatile tone, featuring three single-coil pickups', 35000.00, 10, 'https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?w=400', '{"color": "Sunburst", "strings": 6, "material": "Alder"}'),
    ('Les Paul Standard', 'Gibson', 'Guitar', 'Iconic rock guitar with dual humbucker pickups for warm, rich tones', 75000.00, 5, 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400', '{"color": "Cherry Burst", "strings": 6, "material": "Mahogany"}'),
    ('YDP-165 Digital Piano', 'Yamaha', 'Piano', '88-key digital piano with GH3 action and CFX sound engine', 45000.00, 8, 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=400', '{"keys": 88, "color": "Black", "weight": "42kg"}'),
    ('TD-17KVX Electronic Drum', 'Roland', 'Drums', 'Professional electronic drum kit with mesh heads and realistic feel', 55000.00, 3, 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=400', '{"pads": 5, "cymbals": 3, "module": "TD-17"}'),
    ('Precision Bass', 'Fender', 'Bass', 'Classic precision bass guitar with split single-coil pickup', 32000.00, 7, 'https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?w=400', '{"color": "Black", "strings": 4, "material": "Alder"}'),
    ('FG800 Acoustic Guitar', 'Yamaha', 'Guitar', 'Solid spruce top acoustic guitar with excellent projection', 8500.00, 15, 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400', '{"color": "Natural", "strings": 6, "material": "Spruce"}'),
    ('SM58 Dynamic Microphone', 'Shure', 'Microphone', 'Industry standard dynamic vocal microphone', 3500.00, 20, 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400', '{"type": "Dynamic", "pattern": "Cardioid", "frequency": "50-15000Hz"}'),
    ('Scarlett 2i2 Audio Interface', 'Focusrite', 'Audio Interface', '2-in 2-out USB audio interface with premium preamps', 5500.00, 12, 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400', '{"inputs": 2, "outputs": 2, "sampleRate": "192kHz"}'),
    ('HS8 Studio Monitor', 'Yamaha', 'Speaker', '8-inch powered studio monitor with flat response', 12000.00, 6, 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400', '{"size": "8 inch", "power": "120W", "type": "Active"}'),
    ('Student Violin 4/4', 'Stentor', 'Violin', 'Full size student violin with case, bow and rosin', 8000.00, 10, 'https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?w=400', '{"size": "4/4", "material": "Maple", "includes": "Case, Bow, Rosin"}');