#!/usr/bin/env bash
set -euo pipefail

# FTP Deploy Script
# Backs up current public_html and uploads new build via FTP
#
# Required environment variables:
#   FTP_HOST     - FTP server hostname
#   FTP_USER     - FTP username
#   FTP_PASSWORD - FTP password
#   FTP_PORT     - FTP port (default: 21)
#   LOCAL_DIR    - Local directory to upload (default: dist)
#   REMOTE_DIR   - Remote directory (default: public_html)
#   BACKUP_DIR   - Backup directory (default: backup)

FTP_PORT="${FTP_PORT:-21}"
LOCAL_DIR="${LOCAL_DIR:-dist}"
REMOTE_DIR="${REMOTE_DIR:-public_html}"
BACKUP_DIR="${BACKUP_DIR:-backup}"

# Validate required variables
for var in FTP_HOST FTP_USER FTP_PASSWORD; do
  if [ -z "${!var:-}" ]; then
    echo "Error: $var is not set"
    exit 1
  fi
done

# Validate local directory exists
if [ ! -d "$LOCAL_DIR" ]; then
  echo "Error: Local directory '$LOCAL_DIR' does not exist"
  exit 1
fi

echo "==> Connecting to $FTP_HOST:$FTP_PORT as $FTP_USER"
echo "==> Backup: $REMOTE_DIR -> $BACKUP_DIR"
echo "==> Upload: $LOCAL_DIR -> $REMOTE_DIR"

lftp -c "
  set ftp:ssl-allow no;
  set net:max-retries 3;
  set net:reconnect-interval-base 5;
  set mirror:parallel-transfer-count 5;
  open ftp://${FTP_USER}:${FTP_PASSWORD}@${FTP_HOST}:${FTP_PORT};

  # Remove old backup if exists
  echo '==> Removing old backup...';
  rm -rf ${BACKUP_DIR};

  # Rename current public_html to backup (instant server-side operation)
  echo '==> Moving ${REMOTE_DIR} -> ${BACKUP_DIR}...';
  mv ${REMOTE_DIR} ${BACKUP_DIR} || echo 'Warning: ${REMOTE_DIR} not found, skipping backup';

  # Create fresh public_html
  echo '==> Creating ${REMOTE_DIR}...';
  mkdir -p ${REMOTE_DIR};

  # Upload build results
  echo '==> Uploading ${LOCAL_DIR} to ${REMOTE_DIR}...';
  mirror --verbose --reverse --delete ${LOCAL_DIR}/ ${REMOTE_DIR}/;

  echo '==> Deploy complete!';
  bye;
"
