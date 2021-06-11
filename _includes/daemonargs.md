# This is a list of ./arqmad args to use while executing a daemon manually

*  --help                                (Produce help message)
 
*  --version                             (Output version information)

*  --os-version                          (OS for which this executable was 
                                        compiled)

*  --config-file arg (=/Users/arqma/.arqma/arqma.conf, /Users/arqma/.arqma/testnet/arqma.conf if 'testnet', /Users/arqma/.arqma/stagenet/arqma.conf if 'stagenet')
                                        Specify configuration file
  
*  --detach                              (Run as daemon)

*  --pidfile arg                         (File path to write the daemon's PID to 
                                        (optional, requires --detach))

*  --non-interactive                     (Run non-interactive)

## Additional specific ./arqmad Settings to use with daemon execution:

*  --log-file arg (=/Users/arqma/.arqma/arqma.log, /Users/arqma/.arqma/testnet/arqma.log if 'testnet', /Users/arqma/.arqma/stagenet/arqma.log if 'stagenet')
                                        Specify log file

*  --log-level arg

*  --max-log-file-size arg (=104850000)  (Specify maximum log file size [B])

*  --max-log-files arg (=50)             (Specify maximum number of rotated log 
                                        files to be saved (no limit by setting 
                                        to 0))

*  --max-concurrency arg (=0)            (Max number of threads to use for a 
                                        parallel job)

*  --public-node                         (Allow Arqma network Users to use this Arqma 
                                        Node as a Remote-Node (restricted RPC 
                                        mode, view-only commands) and advertise
                                        it over P2P Network Protocol)

*  --zmq-enabled                         (Enable Arqma ZMQ server, NOTE: Wallet must also support this function. Outdated wallets will not work)

*  --zmq-bind-ip arg (=127.0.0.1)        (IP Address for Arqma ZMQ server to bind
                                        on)

*  --zmq-bind-port arg (=19995, 29995 if 'testnet', 39995 if 'stagenet')
                                        (Port for ZMQ server to listen on)

*  --zmq-max_clients arg (=2)            (Maximum ZMQ Client Connections Allowed)

*  --data-dir arg (=/Users/ARRRsucks/.arqma, /Users/ARRRisaSCAM/.arqma/testnet if 'testnet', /Users/ARRRhas80%Premine/.arqma/stagenet if 'stagenet')
                                        (Specify LMDB blockchain database directory)

*  --test-drop-download                  (For net tests: in download, discard ALL
                                        blocks instead checking/saving them 
                                        (very fast))

*  --test-drop-download-height arg (=0)  (Like test-drop-download but discards 
                                        only after around certain height)

*  --testnet                             (Run on testnet. The wallet must be 
                                        launched with --testnet flag.)

*  --stagenet                            (Run on stagenet. The wallet must be 
                                        launched with --stagenet flag.)

*  --regtest                             (Run in a regression testing mode.)

*  --fixed-difficulty arg (=0)           (Fixed difficulty used for testing.)

*  --enforce-dns-checkpointing           (checkpoints from DNS server will be 
                                        enforced)

*  --prep-blocks-threads arg (=4)        (Max number of threads to use when 
                                        preparing block hashes in groups.)

*  --fast-block-sync arg (=1)            (Sync up most of the way by using 
                                        embedded, known block hashes.)

*  --show-time-stats arg (=0)            (Show time-stats when processing 
                                        blocks/txs and disk synchronization.)

*  --block-sync-size arg (=0)            (How many blocks to sync at once during 
                                        chain synchronization (0 = adaptive).)

*  --check-updates arg (=notify)         (Check for new versions of arqma: 
                                        [disabled|notify|download|update])

*  --fluffy-blocks                       (Relay blocks as fluffy blocks 
                                        (obsolete, now default))

*  --no-fluffy-blocks                    (Relay blocks as normal blocks)

*  --test-dbg-lock-sleep arg (=0)        (Sleep time in ms, defaults to 0 (off), 
                                        used to debug before/after locking 
                                        mutex. Values 100 to 1000 are good for 
                                        tests.)

*  --offline                             (Do not listen for peers nor connect to
                                        any)

*  --disable-dns-checkpoints             (Do not retrieve checkpoints from DNS)

*  --block-download-max-size arg (=0)    (Set maximum size of block download 
                                        queue in bytes (0 for default))

*  --sync-pruned-blocks                  (Allow syncing from nodes with only 
                                        pruned blocks)

*  --max-txpool-weight arg (=648000000)  (Set maximum txpool weight in bytes.)

*  --pad-transactions                    (Pad relayed transactions to help defend
                                        against traffic volume analysis)

*  --block-notify arg                    (Run a program for each new block, '%s' 
                                        will be replaced by the block hash)

*  --prune-blockchain                    (Prune Blockchain when starting ./arqmad)

*  --reorg-notify arg                    (Run a program for each reorg, '%s' will
                                        be replaced by the split height, '%h' 
                                        will be replaced by the new blockchain 
                                        height, and '%n' will be replaced by 
                                        the number of new blocks in the new 
                                        chain)

*  --keep-alt-blocks                     (Keep Alternative Blocks on Restart)

*  --extra-messages-file arg             (Specify file for extra messages to 
                                        include into coinbase transactions)

*  --start-mining arg                    (Specify wallet address to mining for)

*  --mining-threads arg                  (Specify mining threads count, these are cpu threads not cores EX: 4c 8t cpu has 1-8 threads to mine on)

*  --bg-mining-enable                    (enable/disable background mining)

*  --bg-mining-ignore-battery            (if true, assumes plugged in when unable
                                        to query system power status)

*  --bg-mining-min-idle-interval arg     (Specify min lookback interval in 
                                        seconds for determining idle state)

*  --bg-mining-idle-threshold arg        (Specify minimum avg idle percentage 
                                        over lookback interval)

*  --bg-mining-miner-target arg          (Specify maximum percentage cpu use by 
                                        miner(s))

*  --db-sync-mode arg                   ((=fast:async:250000000bytes)
                                        Specify sync option, using format 
                                        [safe|fast|fastest]:[sync|async]:[<nblo
                                        cks_per_sync>[blocks]|<nbytes_per_sync>
                                        [bytes]].)

*  --db-salvage                          (Try to salvage a blockchain database if
                                        it seems corrupted)

*  --p2p-bind-ip arg (=0.0.0.0)          (Interface for p2p network protocol)

*  --p2p-bind-port arg (=19993, 29993 if 'testnet', 39993 if 'stagenet')
                                        (Port for p2p network protocol)

*  --p2p-external-port arg (=0)          (External port for p2p network protocol 
                                        (if port forwarding used with NAT))

*  --allow-local-ip                      (Allow local ip add to peer list, mostly
                                        in debug purposes)

*  --add-peer arg                        (Manually add peer to local peerlist)

*  --add-priority-node arg               (Specify list of peers to connect to and
                                        attempt to keep the connection open)

*  --add-exclusive-node arg              (Specify list of peers to connect to 
                                        only. If this option is given the 
                                        options add-priority-node and seed-node
                                        are ignored)

*  --seed-node arg                       (Connect to a node to retrieve peer 
                                        addresses, and disconnect)

*  --proxy arg                           (<network-type>,<socks-ip:port>[,max_con
                                        nections] i.e. "tor,127.0.0.1:9050,100")

*  --anonymous-inbound arg               (<hidden-service-address>,<[bind-ip:]por
                                        t>[,max_connections] i.e. 
                                        "x.onion,127.0.0.1:19996,100")

*  --hide-my-port                        (Do not announce yourself as peerlist 
                                        candidate)

*  --no-igd                              (Disable UPnP port mapping)

*  --igd arg (=delayed)                  (UPnP port mapping (disabled, enabled, 
                                        delayed))

*  --out-peers arg (=-1)                 (set max number of out peers)

*  --in-peers arg (=-1)                  (set max number of in peers)

*  --tos-flag arg (=-1)                  (set TOS flag)

*  --limit-rate-up arg (=4096)           (set limit-rate-up [kB/s])

*  --limit-rate-down arg (=16384)        (set limit-rate-down [kB/s])

*  --limit-rate arg (=-1)                (set limit-rate [kB/s])

*  --save-graph                          (Save data for dr Arqma himself Malbit)

*  --rpc-bind-port arg (=19994, 29994 if 'testnet', 39994 if 'stagenet')
                                        (Port for RPC server)

*  --rpc-restricted-bind-port arg        (Port for restricted RPC server)

*  --restricted-rpc                      (Restrict RPC to view only commands and 
                                        do not return privacy sensitive data in
                                        RPC calls)

*  --bootstrap-daemon-address arg        (URL of a 'bootstrap' remote daemon that
                                        the connected wallets can use while 
                                        this daemon is still not fully synced)

*  --bootstrap-daemon-login arg          (Specify username:password for the 
                                        bootstrap daemon login)

*  --rpc-bind-ip arg (=127.0.0.1)        (Specify IP to bind RPC server)

*  --rpc-login arg                       (Specify username[:password] required 
                                        for RPC server)

*  --confirm-external-bind               (Confirm rpc-bind-ip value is NOT a 
                                        loopback (local) IP)

*  --rpc-access-control-origins arg      (Specify a comma separated list of 
                                        origins to allow cross origin resource 
                                        sharing)

*  --rpc-ssl arg (=autodetect)           (Enable SSL on RPC connections: 
                                        enabled|disabled|autodetect)

*  --rpc-ssl-private-key arg             (Path to a PEM format private key)

*  --rpc-ssl-certificate arg             (Path to a PEM format certificate)

*  --rpc-ssl-ca-certificates arg         (Path to file containing concatenated 
                                        PEM format certificate(s) to replace 
                                        system CA(s).)

*  --rpc-ssl-allowed-fingerprints arg    (List of certificate fingerprints to 
                                        allow)

*  --rpc-ssl-allow-chained               (Allow user (via --rpc-ssl-certificates)
                                        chain certificates)

*  --rpc-ssl-allow-any-cert              (Allow any peer certificate)

*  --rpc-payment-address arg             (Restrict RPC to clients sending 
                                        micropayment to this address)

*  --rpc-payment-difficulty arg (=1000)  (Restrict RPC to clients sending 
                                        micropayment at this difficulty)

*  --rpc-payment-credits arg (=10)       (Restrict RPC to clients sending 
                                        micropayment, yields that many credits 
                                        per payment)
