CREATE TABLE IF NOT EXISTS users (
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(64) NOT NULL,
    hashed_password VARCHAR(128) NOT NULL,
    token_auth VARCHAR(128),
    credits INT NOT NULL DEFAULT '0',
    created_at DATETIME,
    updated_at DATETIME,

    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS user_logs (
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    action_title VARCHAR(64),
    action_content TEXT,
    user_ip VARCHAR(64),
    created_at DATETIME,

    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS fortumo_transactions (
    id INT NOT NULL AUTO_INCREMENT,
    payment_id VARCHAR(128) NOT NULL,
    user_id INT NOT NULL,
    cuid VARCHAR(32) NOT NULL,
    amount INT NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    price_wo_vat DECIMAL(10,2) NOT NULL,
    user_share DECIMAL(10,2) NOT NULL,
    revenue DECIMAL(10,2) NOT NULL,
    currency VARCHAR(8),
    sender VARCHAR(32),
    operator VARCHAR(64),
    country VARCHAR(16),
    service_id VARCHAR(64) NOT NULL,
    order_status VARCHAR(43) NOT NULL,
    sig VARCHAR(64) NOT NULL,
    error_code VARCHAR(32),
    error_desc VARCHAR(128),
    test VARCHAR(8),

    PRIMARY KEY(id)
);

ALTER TABLE Game_RegisteredItems ADD USER_ID INT DEFAULT '-1';